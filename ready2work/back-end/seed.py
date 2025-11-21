from database import db_mock
from models.colaborador import Colaborador
from models.gestor import Gestor
# Nota: Você precisará importar a classe Application/Candidatura aqui se ela existir,
# mas como ela não existe, usamos dicionários no seed.py.

def seed_database():
    """
    Popula o banco de dados com dados iniciais.
    """
    print("🌱 Iniciando a semeadura do banco de dados...")

    # Certifique-se de que o banco está limpo para evitar duplicação de IDs
    db_mock.limpar_db() 

    # --- Colaborador 1: Ana Silva ---
    print("\n--- Colaborador 1: Ana Silva ---")
    colaborador_ana = Colaborador(
        id=1, 
        nome='Ana Silva', 
        email='colaborador@ready2work.com', # Email de login
        cargo_atual='Desenvolvedora Front-end Pleno',
        setor='Tecnologia',
        gestor='Gestor Exemplo',
        tempo_empresa='10/01/2022'
    )
    
    # Adicionando habilidades
    colaborador_ana.adicionar_habilidade({'name': 'React', 'level': 'Avancado'})
    colaborador_ana.adicionar_habilidade({'name': 'JavaScript', 'level': 'Avancado'})
    
    colaborador_ana.historico_carreira = [ 
        {'role': 'Desenvolvedora Front-end Pleno', 'period': 'Jan/2023 - Atual'},
        {'role': 'Desenvolvedora Front-end Júnior', 'period': 'Jan/2022 - Dez/2022'},
    ]
    colaborador_ana.treinamento_e_certificado = ['Curso Avançado de React Hooks', 'Workshop de Design Systems']

    # --- Candidaturas da Ana ---
    candidaturas_ana = [
        # O dicionário está formatado para ser lido pelo db_mock e, futuramente, pelo frontend
        {'id': 1, 'colaboradorId': 1, 'tituloVaga': 'Desenvolvedor Back-end Sênior (Vaga Interna)', 'dataCandidatura': '28/07/2024', 'status': 'Em Análise', 'classeStatus': 'analise'},
        {'id': 2, 'colaboradorId': 1, 'tituloVaga': 'Engenheiro de Dados (Vaga Interna)', 'dataCandidatura': '22/07/2024', 'status': 'Entrevista Agendada', 'classeStatus': 'aprovado'},
        {'id': 3, 'colaboradorId': 1, 'tituloVaga': 'Product Owner (Vaga Interna)', 'dataCandidatura': '15/07/2024', 'status': 'Rejeitado', 'classeStatus': 'rejeitado'},
    ]
    
    # 1. Salva a candidatura no dicionário 'candidaturas' global do db_mock
    for candidatura in candidaturas_ana:
        db_mock.salvar_candidatura(candidatura)
        # 2. CHAMA O MÉTODO CORRETO: 'salvar_inscricao_vaga'
        # Isso garante que a lista 'inscricoes_de_vaga' do objeto Colaborador seja populada.
        colaborador_ana.salvar_inscricao_vaga(candidatura) 

    # 3. Salva o Colaborador (e seu estado, incluindo a lista de inscrições)
    db_mock.salvar_colaborador(colaborador_ana)
    print(f"✅ Colaborador '{colaborador_ana.nome}' salvo com sucesso!")

    # --- Colaborador 2: Bruno Costa ---
    print("\n--- Colaborador 2: Bruno Costa ---")
    colaborador_bruno = Colaborador(
        id=2, 
        nome='Bruno Costa', 
        email='bruno.costa@ready2work.com',
        cargo_atual='Desenvolvedor Back-end Sênior', 
        setor='Tecnologia',
        gestor='Gestor Exemplo',
        tempo_empresa='15/03/2020'
    )
    
    # Adicionando habilidades
    colaborador_bruno.adicionar_habilidade({'name': 'Python', 'level': 'Avancado'})
    colaborador_bruno.historico_carreira = [
        {'role': 'Desenvolvedor Back-end Sênior', 'period': 'Fev/2022 - Atual'},
    ]
    
    db_mock.salvar_colaborador(colaborador_bruno)
    print(f"✅ Colaborador '{colaborador_bruno.nome}' salvo com sucesso!")

    # --- Gestor ---
    print("\n--- Gestor ---")
    gestor_exemplo = Gestor(
        id=1,
        nome="Carlos Pereira",
        email="gestor@ready2work.com", 
        setor_responsavel="Tecnologia",
        permissao="manager"
    )

    db_mock.salvar_gestor(gestor_exemplo)
    print(f"✅ Gestor '{gestor_exemplo.nome}' salvo com sucesso!")

    print("\n🚀 Banco de dados semeado com sucesso!")

if __name__ == '__main__':
    seed_database()