# seed.py (corrigido e padronizado)

from database import db_mock
from models.colaborador import Colaborador
from models.gestor import Gestor
from datetime import date


def seed_database():
    """
    Popula o banco de dados com dados iniciais seguindo o padrão atual do sistema.
    """
    print("🌱 Iniciando a semeadura do banco de dados...")

    # -----------------------------------------------------------
    # COLABORADOR 1
    # -----------------------------------------------------------

    colaborador_1 = Colaborador(
        id=1,
        nome="Ana Silva",
        email="ana.silva@ready2work.com",
        cargo="Desenvolvedora Front-end Pleno",
        setor="Tecnologia",
        id_gestor_atual=1,
        data_admissao="2022-01-10",
        habilidades_tecnicas=[
            {"nome": "React", "nivel": "Avançado"},
            {"nome": "JavaScript", "nivel": "Avançado"},
            {"nome": "CSS", "nivel": "Intermediário"}
        ],
        soft_skills=["Comunicação", "Colaboração", "Resolução de Problemas"],
        trilhas_aprendizado=["Front-end Avançado", "Design Systems"],
        treinamentos_e_certificados=[
            "Curso Avançado de React Hooks",
            "Workshop de Design Systems"
        ],
        historico_performance=[
            {"ano": 2023, "avaliacao": "Excelente"},
            {"ano": 2022, "avaliacao": "Bom"}
        ],
        historico_cargos=[
            {"cargo": "Front-end Pleno", "periodo": "2023 - Atual"},
            {"cargo": "Front-end Júnior", "periodo": "2022 - 2023"}
        ],
        candidaturas=[],
        roles=["colaborador"]
    )

    db_mock.salvar_colaborador(colaborador_1)
    print(f"✅ Colaborador '{colaborador_1.nome}' salvo com sucesso!")

    # -----------------------------------------------------------
    # COLABORADOR 2
    # -----------------------------------------------------------
    colaborador_2 = Colaborador(
        id=2,
        nome="Bruno Costa",
        email="bruno.costa@ready2work.com",
        cargo="Desenvolvedor Back-end Sênior",
        setor="Tecnologia",
        id_gestor_atual=1,
        data_admissao="2020-03-15",
        habilidades_tecnicas=[
            {"nome": "Python", "nivel": "Avançado"},
            {"nome": "Django", "nivel": "Avançado"},
            {"nome": "PostgreSQL", "nivel": "Intermediário"},
            {"nome": "Docker", "nivel": "Intermediário"}
        ],
        soft_skills=["Liderança", "Pensamento Analítico"],
        trilhas_aprendizado=["Arquitetura de Software", "APIs Avançadas"],
        treinamentos_e_certificados=[
            "Arquitetura de Microsserviços",
            "Boas práticas com REST APIs"
        ],
        historico_performance=[
            {"ano": 2023, "avaliacao": "Excelente"},
            {"ano": 2021, "avaliacao": "Bom"}
        ],
        historico_cargos=[
            {"cargo": "Back-end Sênior", "periodo": "2022 - Atual"},
            {"cargo": "Back-end Pleno", "periodo": "2020 - 2022"}
        ],
        candidaturas=[],
        roles=["colaborador"]
    )

    db_mock.salvar_colaborador(colaborador_2)
    print(f"✅ Colaborador '{colaborador_2.nome}' salvo com sucesso!")

    # -----------------------------------------------------------
    # GESTOR
    # -----------------------------------------------------------

    gestor = Gestor(
        id_colaborador=1,
        permissao="gestor",
        equipes=[1, 2],
        vagas_abertas=[]
    )

    db_mock.salvar_gestor(gestor)
    print(f"✅ Gestor do colaborador ID 1 salvo com sucesso!")

    print("🚀 Banco de dados semeado com sucesso!")


if __name__ == "__main__":
    seed_database()
