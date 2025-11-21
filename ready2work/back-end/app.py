from flask import Flask, jsonify
from flask_cors import CORS
from database import db_mock # Mantido como você enviou

# Inicializa a aplicação Flask
app = Flask(__name__)

# Habilita o CORS. Isto é CRÍTICO para resolver o erro CORS!
# Permite acesso de qualquer origem.
CORS(app) 

# --- DEFINIÇÃO DAS ROTAS DA API ---

@app.route('/api/colaboradores', methods=['GET'])
def get_colaboradores():
    """
    Endpoint para listar todos os colaboradores.
    """
    colaboradores = db_mock.listar_colaboradores()
    return jsonify(colaboradores)

@app.route('/api/colaboradores/<int:user_id>', methods=['GET'])
def get_colaborador_by_id(user_id):
    """
    Endpoint para buscar um colaborador específico pelo ID.
    """
    colaborador = db_mock.obter_colaborador_por_id(user_id)
    if colaborador:
        return jsonify(colaborador)
    return jsonify({"error": "Colaborador não encontrado"}), 404

# 🟢 ROTA CORRIGIDA PARA BUSCAR DADOS DE CANDIDATURAS
@app.route('/api/applications/<int:user_id>', methods=['GET'])
def get_user_applications(user_id):
    """
    Endpoint para buscar as inscrições de um colaborador específico usando a função mockada.
    """
    # 🟢 Agora chama a função correta no db_mock que busca na coleção 'candidaturas'
    applications = db_mock.obter_candidaturas_por_colaborador(user_id)
    
    # Se a lista estiver vazia, retorna um status 200 com array vazio.
    return jsonify(applications) 

if __name__ == '__main__':
    # Roda o servidor em modo de debug na porta 5000
    app.run(debug=True, port=5000)