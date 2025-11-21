from database import db_mock

from flask import Blueprint, jsonify



# Define um Blueprint (agrupamento de rotas)

candidatura_bp = Blueprint('candidatura_bp', __name__)



@candidatura_bp.route('/api/candidaturas/usuario/<int:colaborador_id>', methods=['GET'])

def obter_candidaturas_por_colaborador(colaborador_id):

    """

    Endpoint para buscar todas as candidaturas de um colaborador específico.

    Exemplo de chamada: GET /api/candidaturas/usuario/1

    """

   

    # 1. Busca os dados no mock database

    candidaturas = db_mock.obter_candidaturas_por_colaborador(colaborador_id)

   

    if not candidaturas:

        # Retorna lista vazia se não encontrar, com status 200 OK.

        return jsonify([]), 200



    # 2. Retorna a lista em formato JSON

    return jsonify(candidaturas), 200



# Se você precisar de uma rota para buscar um colaborador, adicione aqui

@candidatura_bp.route('/api/colaboradores/<int:colaborador_id>', methods=['GET'])

def obter_colaborador_por_id(colaborador_id):

    """Retorna os dados de um colaborador."""

    colaborador = db_mock.obter_colaborador_por_id(colaborador_id)

    if colaborador:

        return jsonify(colaborador), 200

    return jsonify({'erro': 'Colaborador não encontrado'}), 404