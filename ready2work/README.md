# 🚀 Ready2Work  
### *Conector de habilidades entre profissionais e empresas — Requalificação sem demissão.*

---

## 📌 Sobre o Projeto

O **Ready2Work** é uma plataforma pensada para transformar o jeito como empresas identificam, desenvolvem e realocam talentos.  
Em vez de demitir, a ideia é **requalificar**, **redistribuir** e **potencializar** as pessoas certas para as funções certas.  

Combinando tecnologia, dados e uma análise real baseada em entrevistas com gestores e RH, o sistema cria um fluxo transparente e inteligente para movimentações internas.

---

## 🎯 Objetivo

Ajudar empresas a requalificar funcionários e realocar profissionais para novas funções, reduzindo demissões e combatendo a desigualdade digital.  
Um ecossistema que une:  
- **Gestores que precisam preencher vagas internas**,  
- **Colaboradores buscando crescimento**,  
- **RH que precisa de clareza no fluxo**,  
- **Diretoria querendo impacto real.**

---

## 🧩 Principais Funcionalidades

### 🟦 1. Cadastro de Habilidades e Perfil  
Interface em **React** para que funcionários registrem:
- Hard skills  
- Soft skills  
- Função atual e função desejada  
- Objetivos de carreira  

---

### 🟦 2. Motor de Recomendação (Python + IA)  
O backend utiliza **Pandas + lógica de pesos** para gerar:
- Compatibilidade entre colaborador e vaga  
- Sugestões de trilhas de aprendizado  
- Cursos recomendados via integração com APIs (Alura, Coursera, Udemy, etc.)

---

### 🟦 3. Workflow de Movimentação Interna  
Fluxo completo, padronizado e transparente:


Com status claros e histórico de decisões.

---

### 🟦 4. Dashboard e Gamificação  
Para aumentar o engajamento e diminuir a resistência cultural, o sistema inclui:
- Pontos, badges e níveis de progresso  
- Gráficos de evolução (Chart.js)  
- Ranking interno  
- Notificações automáticas  

---

## 🔍 Insights da Pesquisa de Campo (Resumo)

Durante entrevistas com gestores, vimos dores reais:
- Falta de processo formal para movimentação interna  
- Resistência de gestores em liberar funcionários  
- Falta de transparência  
- Rotatividade alta  
- Falta de incentivo para aprender novas funções  

O **Ready2Work** nasce exatamente para resolver isso.

---

## ⚙️ Tecnologias Utilizadas

| Camada | Tecnologias |
|-------|-------------|
| **Frontend** | React, JavaScript, Tailwind, Chart.js |
| **Backend** | Python, FastAPI, Pandas, Scikit-Learn |
| **Banco de Dados** | JSON (mock), futuro: PostgreSQL |
| **APIs Externas** | Coursera, Alura, Udemy |
| **Gamificação** | JavaScript + regras de pontuação |

---

## 📊 Arquitetura — Visão Geral

📁 frontend-react
- ├── pages/
- ├── components/
- └── services/

📁 backend-python
- ├── models/
- ├── services/
- ├── routes/
- └── database_mock/

📁 analysis
- └── insights da pesquisa e modelagem

---

## 🧭 Direcionamento Técnico

| Problema identificado | Solução implementada | Tecnologia |
|----------------------|----------------------|------------|
| Falta de processo formal | Workflow interno padronizado | React + FastAPI |
| Seleção subjetiva | Algoritmo de compatibilidade | Python |
| Falta de engajamento | Gamificação + gráficos | React + JS |
| Ausência de trilhas | Recomendação por IA | Python + APIs |
| Comunicação falha | Notificações e histórico | JS + Backend |

---

## 👥 Time do Projeto

| Integrante | Função |
|------------|--------|
| **Nicolas Santos** | Backend Developer |
| **Eduardo Bielecky** | Frontend Developer (Layout) |
| **Eduardo Vicentini** | Frontend Developer |
| **Caio Ribeiro** | Frontend Developer |
| **João Ricardo** | Criador da ideia do layout |

---

## 💡 Por que o Ready2Work importa?

⬆ Promove crescimento interno  
🌱 Reduz demissões  
🔄 Reaproveita talentos  
💬 Traz transparência  
📈 Incentiva aprendizado contínuo  
🧭 Diminui desigualdade digital  

---

## 🌐 Demonstração

(Adicionar o link do deploy assim que estiver disponível)

## 📎 Contribuição

Sinta-se livre para abrir issues, sugerir melhorias ou contribuir com código.
O projeto está em construção e queremos torná-lo cada vez mais completo e realista.

---

## 🚀 Instalação e Execução

### Backend
```bash
cd backend-python
pip install -r requirements.txt
python main.py

cd frontend-react
npm install
npm run dev