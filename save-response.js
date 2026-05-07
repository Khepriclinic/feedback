async function salvarResposta() {
  const nome = document.getElementById('nome')?.value || 'Sem nome';
  const email = document.getElementById('email')?.value || '';
  const dados = {
    timestamp: new Date().toISOString(),
    nome: nome,
    email: email,
    telefone: document.getElementById('telefone')?.value || '',
    mensagem: document.getElementById('mensagem')?.value || '',
    respostas: coletarRespostas()
  };

  console.log('Enviando feedback:', dados);

  try {
    const response = await fetch('https://formspree.io/f/xyzqazop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _subject: 'Novo Feedback: ' + dados.nome,
        _replyto: email,
        nome: dados.nome,
        email: email,
        telefone: dados.telefone,
        mensagem: dados.mensagem,
        timestamp: dados.timestamp,
        dados_completos: JSON.stringify(dados.respostas, null, 2)
      })
    });

    if (response.ok) {
      alert('Feedback salvo e email enviado para karen.zanferrari@hotmail.com');
      console.log('Email enviado com sucesso');
    } else {
      alert('Erro ao enviar email');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao processar feedback');
  }
}

function coletarRespostas() {
  const respostas = {};
  document.querySelectorAll('input, textarea, select').forEach(el => {
    if (el.name) {
      respostas[el.name] = el.value;
    }
  });
  return respostas;
}
