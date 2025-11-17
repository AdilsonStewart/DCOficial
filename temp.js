const mercadopago = require('mercadopago'); 
 
mercadopago.configure({ 
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN 
}); 
 
exports.handler = async (event) =
  if (event.httpMethod !== 'POST') { 
    return { statusCode: 405, body: JSON.stringify({ error: 'MÇtodo n∆o permitido' }) }; 
  } 
 
  try { 
    const { valor, usuarioId, tipo = "audio" } = JSON.parse(event.body); 
    console.log('Criando pagamento DeixaComigo:', { valor, usuarioId, tipo }); 
 
    const response = await mercadopago.preferences.create({ 
      items: [{ 
        title: "Gravaá∆o - DeixaComigo", 
        unit_price: parseFloat(valor), 
        quantity: 1, 
        currency_id: 'BRL' 
      }], 
      back_urls: { 
        success: 'https://dcoficial.netlify.app/sucesso', 
        failure: 'https://dcoficial.netlify.app/erro', 
        pending: 'https://dcoficial.netlify.app/erro' 
      }, 
      auto_return: 'approved' 
    }); 
 
    return { 
      statusCode: 200, 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ 
        success: true, 
        init_point: 'https://dcoficial.netlify.app/sucesso', 
        preference_id: 'simulacao-' + Date.now(), 
        sandbox_init_point: 'https://dcoficial.netlify.app/sucesso' 
      }) 
    }; 
 
  } catch (error) { 
    console.error('Erro:', error); 
    return { statusCode: 500, body: JSON.stringify({ success: false, error: error.message }) }; 
  } 
}; 
