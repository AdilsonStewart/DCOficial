const mercadopago = require('mercadopago');

// Configura com o Access Token
mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN
});

exports.handler = async (event) => {
  // Só aceita POST
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Método não permitido' }) 
    };
  }

  try {
    const { valor, usuarioId, tipo = "audio" } = JSON.parse(event.body);
    
    console.log('💰 Criando pagamento DeixaComigo:', { valor, usuarioId, tipo });
    
    // Define o título baseado no tipo
    const titulos = {
      audio: "Gravação de Áudio - DeixaComigo",
      video: "Gravação de Vídeo - DeixaComigo" 
    };
    
    const preference = {
      items: [
        {
          title: titulos[tipo] || "Serviço DeixaComigo",
          unit_price: parseFloat(valor),
          quantity: 1,
          currency_id: 'BRL'
        }
      ],
      back_urls: {
        success: 'https://dcoficial.netlify.app/sucesso',
        failure: 'https://dcoficial.netlify.app/erro', 
        pending: 'https://dcoficial.netlify.app/erro'
      },
      auto_return: 'approved',
      notification_url: 'https://dcoficial.netlify.app/.netlify/functions/webhook-pagamento',
      metadata: {
        usuario_id: usuarioId,
        tipo: tipo
      }
    };

    const response = await mercadopago.preferences.create(preference);
    
    console.log('✅ Pagamento criado:', response.body.id);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        init_point: response.body.init_point,
        preference_id: response.body.id,
        sandbox_init_point: response.body.sandbox_init_point
      })
    };
    
  } catch (error) {
    console.error('❌ Erro no Mercado Pago:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};