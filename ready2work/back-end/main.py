from flask_cors import CORS
# 1. Importa a instância do Flask e as rotas definidas no app.py
from app import app
# Importa o seed.py. Se o seed.py não estiver na mesma pasta que main.py,
# ajuste esta linha para "from .seed import seed_database" ou "from backend.seed import seed_database"
# Vamos manter "from seed import seed_database" por enquanto.
from seed import seed_database 

# IMPORTANTE: Em um ambiente de produção, use uma chave secreta complexa
app.secret_key = 'super_secret_key' 

# Configura o CORS para permitir conexões do frontend React (porta 5173)
# O 'supports_credentials=True' é OBRIGATÓRIO para permitir sessões (login) e cookies
CORS(app, supports_credentials=True)

# ----------------------------------------------------
# 2. POPULAR O BANCO DE DADOS
# O seed deve ser chamado APENAS uma vez na inicialização
# ----------------------------------------------------
try:
    print("-> Iniciando a popularização do banco de dados mock (seed.py)...")
    seed_database()
    print("-> Banco de dados mock populado com sucesso.")
except Exception as e:
    # Captura o erro (provavelmente o AttributeError) e informa o usuário
    print(f"-> ERRO CRÍTICO NO SEED: Falha ao popular o banco de dados. {e}")
    print("   -> Os dados de candidatura podem estar faltando ou incorretos.")
    print("   -> Verifique o erro no 'seed.py' ou 'colaborador.py'.")

if __name__ == '__main__':
    # Roda o servidor em modo de debug na porta 5000
    print("\n🚀 Servidor Flask Ready2Work iniciado em http://127.0.0.1:5000")
    print("   -> Frontend deve se conectar a este endereço.")
    app.run(debug=True, port=5000)