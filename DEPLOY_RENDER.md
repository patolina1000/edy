# 🚀 Deploy no Render - Guia Completo

## ✅ **TUDO VAI FUNCIONAR!**

Este projeto está 100% compatível com Render. Aqui está o que você precisa saber:

---

## 📋 **Passo a Passo para Deploy**

### **1. Criar conta no Render**
- Acesse: https://render.com
- Faça login com GitHub

### **2. Novo Web Service**
1. Clique em "New +" → "Web Service"
2. Conecte seu repositório GitHub
3. Selecione o repositório do projeto

### **3. Configurações do Serviço**

#### **Nome:**
```
hadrielle-site
```

#### **Region:**
```
Oregon (US West)
```

#### **Branch:**
```
main
```

#### **Build Command:**
```bash
npm install
```

#### **Start Command:**
```bash
npm start
```

#### **Plan:**
```
Free (ou Starter se quiser mais performance)
```

---

## 🔐 **Variáveis de Ambiente**

**IMPORTANTE:** Adicione no Dashboard do Render (Settings → Environment):

```
NODE_ENV=production
GATEWAY=pushinpay
ENVIRONMENT=production
GENERATE_QR_CODE_ON_MOBILE=true
SYNCPAY_CLIENT_ID=708ddc0b-357d-4548-b158-615684caa616
SYNCPAY_CLIENT_SECRET=c08d40e5-3049-48c9-85c0-fd3cc6ca502c
PUSHINPAY_TOKEN=45135|XFE5jjzsKTBY4PN1RXFIe7EISDX2DEHFukqMfii897180772
WEBHOOK_BASE_URL=https://seu-app.onrender.com
MODEL_NAME=Hadrielle Maria
REDIRECT_URL=https://typebot.co/compra-privacyofc
```

---

## 🌐 **URLs do Projeto no Render**

Após deploy, você terá:

```
https://seu-app.onrender.com
https://seu-app.onrender.com/links
https://seu-app.onrender.com/presell
https://seu-app.onrender.com/obrigado
https://seu-app.onrender.com/privacy
```

---

## 🎯 **Sistema de Grupos do Telegram**

### **Como usar:**

```
# Grupo 1 (PUTINHA - 86 membros)
https://seu-app.onrender.com/obrigado?g=g1&v=19.90&tx=PIX-123

# Grupo 2 (QUARTO SECRETO)
https://seu-app.onrender.com/obrigado?g=g2&v=49.90

# Grupo 3 (GALERIA COMPLETA)
https://seu-app.onrender.com/obrigado?g=g3

# Grupo 4 (FILA DE ESPERA)
https://seu-app.onrender.com/obrigado?g=g4

# Grupo 5 (WHATSAPP)
https://seu-app.onrender.com/obrigado?g=g5

# Grupo 6 (agendamentos)
https://seu-app.onrender.com/obrigado?g=g6
```

---

## ✅ **O QUE JÁ ESTÁ FUNCIONANDO**

### **1. Design Moderno:**
- ✅ Presell com efeito glassmorphism
- ✅ Obrigado com gradientes neon
- ✅ Animações e efeitos glow
- ✅ Responsivo para mobile

### **2. Facebook Pixel:**
- ✅ PageView com Advanced Matching
- ✅ ViewContent no presell (clique no botão)
- ✅ Purchase no obrigado (com eventID único)
- ✅ IP-API PRO para geolocalização (sem limites)

### **3. Sistema Inteligente:**
- ✅ Timer 10-30s baseado em digitação de email
- ✅ Captura automática de email antes do Purchase
- ✅ Redirecionamento para grupos dinâmicos (g1-g6)
- ✅ Transaction ID único para cada venda

### **4. APIs:**
- ✅ /api/config - Configurações
- ✅ /api/payments/* - Pagamentos PIX
- ✅ /api/health - Health check
- ✅ Webhook handlers

---

## 🔄 **Diferenças Render vs Vercel**

| Recurso | Vercel | Render |
|---------|--------|--------|
| **Tipo** | Serverless | Web Service persistente |
| **Cold Start** | Sim (1-2s) | Não (sempre ativo) |
| **Deploy** | Git push | Git push |
| **Logs** | Dashboard | Dashboard |
| **Custom Domain** | Grátis | Grátis |
| **SSL** | Automático | Automático |

**Vantagem do Render:** Servidor sempre ativo (sem cold start)!

---

## 📊 **Performance**

### **Otimizações já implementadas:**
- ✅ IP-API PRO (rápido e confiável)
- ✅ Lazy loading de imagens
- ✅ Preconnect para Facebook Pixel
- ✅ Minificação CSS inline
- ✅ Font display swap

---

## 🐛 **Troubleshooting**

### **Problema:** Deploy falhou
**Solução:** 
```bash
npm install
npm start
```
Verifique se funciona localmente primeiro.

### **Problema:** Variáveis de ambiente não funcionam
**Solução:** 
- Vá em Settings → Environment
- Adicione todas as variáveis manualmente
- Clique em "Save" e faça redeploy

### **Problema:** Página não carrega
**Solução:**
- Verifique logs no Dashboard
- Confirme que PORT está sendo usado corretamente
- O Render injeta automaticamente process.env.PORT

---

## 📝 **Checklist de Deploy**

- [ ] Criar Web Service no Render
- [ ] Conectar repositório GitHub
- [ ] Configurar Build Command: `npm install`
- [ ] Configurar Start Command: `npm start`
- [ ] Adicionar variáveis de ambiente
- [ ] Aguardar primeiro deploy (2-3 min)
- [ ] Testar URLs principais
- [ ] Testar sistema de grupos (g1-g6)
- [ ] Verificar Facebook Pixel no console
- [ ] Adicionar custom domain (opcional)

---

## 🎉 **Pronto!**

Após deploy, seu site estará 100% funcional com:
- ✅ Design moderno e profissional
- ✅ Facebook Pixel otimizado
- ✅ 6 grupos do Telegram configurados
- ✅ Sistema de pagamento PIX
- ✅ Geolocalização automática
- ✅ Performance otimizada

---

## 📞 **Suporte**

Se tiver problemas:
1. Verifique logs no Dashboard do Render
2. Confirme variáveis de ambiente
3. Teste localmente com `npm start`
4. Verifique console do navegador para erros do Pixel

**Tudo vai funcionar perfeitamente!** 🚀

