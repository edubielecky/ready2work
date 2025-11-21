# File: backend/database/db_mock.py

# Banco de dados mockado totalmente em memória

from models.colaborador import Colaborador
from models.gestor import Gestor

# Estrutura do banco de dados simples em memória
db = {
    "colaboradores": {},
    "gestores": {},
    "candidaturas": {}  # equivalente ao antigo "applications"
}

# -------------------------
# COLABORADORES
# -------------------------

def salvar_colaborador(colaborador: Colaborador):
    """Salva ou atualiza um colaborador no banco mockado."""
    # O objeto 'colaborador' é convertido para um dicionário para ser salvo no db mockado
    db["colaboradores"][colaborador.id] = {
        "id": colaborador.id,
        "nome": colaborador.nome,
        "email": colaborador.email,
        "cargo_atual": colaborador.cargo_atual,
        "setor": colaborador.setor,
        "gestor": colaborador.gestor,
        "tempo_empresa": colaborador.tempo_empresa,
        "habilidades_tecnicas": colaborador.habilidades_tecnicas,
        "soft_skills": colaborador.soft_skills,
        "trilhas_aprendizados": colaborador.trilhas_aprendizados,
        "avaliacao_desempenho": colaborador.avaliacao_desempenho,
        "historico_carreira": colaborador.historico_carreira,
        "treinamento_e_certificado": colaborador.treinamento_e_certificado,
        # REMOVIDO: "inscricao_vaga": colaborador.inscricao_vaga, 
        # O atributo 'inscricao_vaga' causava o erro CRÍTICO no SEED.
        # Se for necessário, use o nome correto do atributo de Colaborador.
        "status_vaga": getattr(colaborador, 'status_vaga', None), # Uso seguro
        "motivo_reprovacao": getattr(colaborador, 'motivo_reprovacao', None), # Uso seguro
    }

def listar_colaboradores():
    """Retorna todos os colaboradores (dados completos)."""
    return list(db["colaboradores"].values())


def obter_colaborador_por_id(colaborador_id: int):
    """Retorna um colaborador pelo ID."""
    return db["colaboradores"].get(colaborador_id)


def obter_colaborador_por_email(email: str):
    """Busca colaborador por e-mail."""
    for _, dados in db["colaboradores"].items():
        if dados["email"] == email:
            return dados
    return None


# -------------------------
# GESTORES (Sem alteração)
# -------------------------

def salvar_gestor(gestor: Gestor):
    """Salva ou atualiza um gestor no banco."""
    db["gestores"][gestor.id] = {
        "id": gestor.id,
        "nome": gestor.nome,
        "email": gestor.email,
        "setor_responsavel": gestor.setor_responsavel,
        "vagas_abertas": gestor.vagas_abertas,
        "colaboradores_sob_gestao": gestor.colaboradores_sob_gestao,
        "permissao": gestor.permissao
    }


def obter_gestor_por_id(gestor_id: int):
    return db["gestores"].get(gestor_id)


# -------------------------
# CANDIDATURAS (equivalente ao antigo Application)
# -------------------------

def salvar_candidatura(candidatura):
    """Salva uma candidatura associada a um colaborador."""
    # Assumimos que 'candidatura' já possui o 'colaboradorId' e 'id'
    db["candidaturas"][candidatura["id"]] = candidatura


def obter_candidaturas_por_colaborador(colaborador_id: int):
    """Listar todas as candidaturas de um colaborador. (Função de busca para o frontend)"""
    # Esta função agora retorna os dados estruturados para o frontend
    candidaturas_do_colaborador = [
        c for c in db["candidaturas"].values()
        if c.get("colaboradorId") == colaborador_id
    ]
    
    # 🟢 Formata os dados para o frontend React
    # O frontend espera: { id, jobTitle, applicationDate, status }
    formatted_applications = []
    for c in candidaturas_do_colaborador:
        formatted_applications.append({
            "id": c.get("id"),
            "jobTitle": c.get("tituloVaga", "Vaga Sem Título"),
            "applicationDate": c.get("dataCandidatura", "Data Desconhecida"),
            "status": c.get("status", "Em Análise"), # Garante um status padrão
            # Adicione outros campos necessários aqui, se existirem na candidatura
        })

    return formatted_applications


# -------------------------
# LIMPAR BANCO (Sem alteração)
# -------------------------

def limpar_db():
    """Remove tudo do banco."""
    db["colaboradores"] = {}
    db["gestores"] = {}
    db["candidaturas"] = {}