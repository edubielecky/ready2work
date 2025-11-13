from database import db_mock
from models.colaborador import Colaborador
from models.gestor import Gestor

def seed_database():
    """
    Popula o banco de dados com dados iniciais se ele estiver vazio.
    """
    print("🌱 Iniciando a semeadura do banco de dados...")

    # Criando um colaborador de exemplo com ID 1
    colaborador_exemplo = Colaborador(
        id=1, name='Ana Silva', email='ana.silva@ready2work.com',
        role='Desenvolvedora Front-end Pleno', department='Tecnologia',
        manager='Gestor Exemplo', joinDate='10/01/2022'
    )
    colaborador_exemplo.skills = [
        {'name': 'React', 'level': 'Avancado'},
        {'name': 'JavaScript', 'level': 'Avancado'},
        {'name': 'CSS', 'level': 'Intermediario'},
    ]
    colaborador_exemplo.careerHistory = [
        {'role': 'Desenvolvedora Front-end Pleno', 'period': 'Jan/2023 - Atual'},
        {'role': 'Desenvolvedora Front-end Júnior', 'period': 'Jan/2022 - Dez/2022'},
    ]
    colaborador_exemplo.trainings = ['Curso Avançado de React Hooks', 'Workshop de Design Systems']
    colaborador_exemplo.applications = [
        {'id': 1, 'jobTitle': 'Desenvolvedor Back-end Sênior (Vaga Interna)', 'applicationDate': '28/07/2024', 'status': 'Em Análise', 'statusClass': 'analise'},
        {'id': 2, 'jobTitle': 'Engenheiro de Dados (Vaga Interna)', 'applicationDate': '22/07/2024', 'status': 'Entrevista Agendada', 'statusClass': 'aprovado'},
        {'id': 3, 'jobTitle': 'Product Owner (Vaga Interna)', 'applicationDate': '15/07/2024', 'status': 'Rejeitado', 'statusClass': 'rejeitado'},
    ]

    db_mock.salvar_colaborador(colaborador_exemplo)
    print(f"✅ Colaborador '{colaborador_exemplo.name}' salvo com sucesso!")

    # Criando um segundo colaborador de exemplo com ID 2
    colaborador_2 = Colaborador(
        id=2, name='Bruno Costa', email='bruno.costa@ready2work.com',
        role='Desenvolvedor Back-end Sênior', department='Tecnologia',
        manager='Gestor Exemplo', joinDate='15/03/2020'
    )
    colaborador_2.skills = [
        {'name': 'Python', 'level': 'Avancado'},
        {'name': 'Django', 'level': 'Avancado'},
        {'name': 'PostgreSQL', 'level': 'Intermediario'},
        {'name': 'Docker', 'level': 'Intermediario'},
    ]
    colaborador_2.careerHistory = [
        {'role': 'Desenvolvedor Back-end Sênior', 'period': 'Fev/2022 - Atual'},
        {'role': 'Desenvolvedor Back-end Pleno', 'period': 'Mar/2020 - Jan/2022'},
    ]
    colaborador_2.trainings = ['Arquitetura de Microsserviços', 'Boas práticas com REST APIs']
    db_mock.salvar_colaborador(colaborador_2)
    print(f"✅ Colaborador '{colaborador_2.name}' salvo com sucesso!")

    # Criando um gestor de exemplo com ID 1
    gestor_exemplo = Gestor(
        id=1,
        nome="Carlos Pereira",
        email="carlos.pereira@ready2work.com",
        setor_responsavel="Tecnologia",
        permissao="manager"
    )

    db_mock.salvar_gestor(gestor_exemplo)
    print(f"✅ Gestor '{gestor_exemplo.nome}' salvo com sucesso!")

    print("🚀 Banco de dados semeado.")

if __name__ == '__main__':
    seed_database()