# 📋 Sistema de Salvamento de Respostas - Feedback

## ✨ Funcionalidades

✅ **Salva respostas em JSON** dentro do GitHub  
✅ **Envia email automático** para `karen.zanferrari@hotmail.com`  
✅ **Funciona offline** (salva localmente e sincroniza depois)  
✅ **Sem servidor necessário** (usa Formspree grátis)

---

## 🚀 Como Usar

### 1️⃣ Adicione o script ao seu HTML

Adicione esta linha antes de `</body>`:

```html
<script src="save-response.js"></script>
```

### 2️⃣ Adicione um botão ao formulário

Adicione isto onde quiser que apareça o botão de salvar:

```html
<button onclick="salvarResposta()" style="padding:10px 20px; background:#1a9e75; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold; font-size:16px;">
  💾 Salvar Resposta
</button>
```

### 3️⃣ Pronto! 

Quando o usuário clicar no botão:
- ✅ A resposta será enviada por email
- ✅ Será salva em um arquivo JSON
- ✅ Uma mensagem de confirmação aparecerá

---

## 📧 Configuração de Email

O sistema usa **Formspree** (serviço gratuito que funciona sem backend):

### Seu email é:
```
karen.zanferrari@hotmail.com
```

---

## 📁 Estrutura de Pastas

```
/feedback/
├── index.html              (seu formulário)
├── save-response.js        (este script)
├── SETUP.md                (este arquivo)
└── responses/              (pasta onde ficam os JSONs)
    ├── feedback_2026-05-06...json
    ├── feedback_2026-05-07...json
    └── ...
```

---

## 🔍 Visualizar Respostas

### No GitHub:
Acesse a pasta `responses/` do seu repositório para ver todos os arquivos JSON com as respostas.

### Localmente (offline):
Abra o DevTools (F12) > Console e execute:
```javascript
JSON.parse(localStorage.getItem('respostas_feedback'))
```

---

## ✅ Exemplo de Resposta Salva

```json
{
  "timestamp": "2026-05-06T15:30:00.000Z",
  "nome": "João Silva",
  "email": "joao@example.com",
  "telefone": "(11) 99999-9999",
  "mensagem": "Amei o atendimento!",
  "todas_as_respostas": {
    "satisfacao": "5",
    "recomendaria": "sim",
    "observacoes": "Serviço excelente!"
  }
}
```

---

## 🛠️ Customização

Edite o arquivo `save-response.js` para mudar:

- **Email de destino**: Mude a linha que contém `karen.zanferrari@hotmail.com`
- **Assunto do email**: Mude a string em `_subject`
- **Campos coletados**: Modifique a função `coletarTodasAsRespostas()`

---

## ❓ Troubleshooting

### ❌ Email não chegou?
1. Verifique a pasta de spam
2. Confirme seu email no link do Formspree (primeira vez)
3. Verifique o console do navegador (F12) para erros

### ❌ Arquivo não salva no GitHub?
1. Verifique se a pasta `responses/` existe
2. Verifique permissões do repositório
3. Respostas serão salvas localmente (localStorage) como fallback

### ✅ Tudo funcionando?
Você verá uma mensagem verde: **"✅ Resposta salva e email enviado!"**

---

## 📞 Suporte

Email: `karen.zanferrari@hotmail.com`  
Repositório: `https://github.com/Khepriclinic/feedback`
