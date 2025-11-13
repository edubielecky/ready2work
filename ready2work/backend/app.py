from flask import Flask, jsonify
from flask_cors import CORS
from database import db_mock

# Inicializa a aplicação Flask
app = Flask(__name__)

# Habilita o CORS para permitir que o frontend (rodando em outra porta)
# faça requisições para este backend.
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
    colaboradores = db_mock.listar_colaboradores()
    # Procura o colaborador com o ID correspondente
    colaborador = next((c for c in colaboradores if c.get('id') == user_id), None)
    if colaborador:
        return jsonify(colaborador)
    return jsonify({"error": "Colaborador não encontrado"}), 404

@app.route('/api/applications/<int:user_id>', methods=['GET'])
def get_user_applications(user_id):
    """
    Endpoint para buscar as inscrições de um colaborador específico.
    """
    colaboradores = db_mock.listar_colaboradores()
    colaborador = next((c for c in colaboradores if c.get('id') == user_id), None)

    if colaborador and 'applications' in colaborador:
        return jsonify(colaborador['applications'])
    return jsonify([]) # Retorna uma lista vazia se não encontrar ou não tiver inscrições

if __name__ == '__main__':
    # Roda o servidor em modo de debug na porta 5000
    app.run(debug=True, port=5000)