#database
from database.db_mock import salvar_colaborador, listar_colaboradores, salvar_gestor, listar_gestores
#colaborador
from models.colaborador import Colaborador
#gestor
from models.gestor import Gestor

# Criando um novo colaborador
colab1 = Colaborador(
    id= 2, # Usando um ID diferente para não conflitar com o seed
    nome="João Silva",
    email="joao@empresa.com",
    cargo_atual="Assistente Técnico",
    setor="Manutenção",
    gestor="Eduardo Bielecky",
    tempo_empresa= "01/01/2025"
)
colab1.adicionar_habilidade({'name': 'Soldagem', 'level': 'Intermediário'})
colab1.adicionar_soft_skill("Trabalho em equipe") # Soft skills podem ser mantidas para uso futuro
colab1.atualizar_status_vaga("Em análise") # Status de vaga interna

# Salvando o colaborador no mock
salvar_colaborador(colab1)

# Listando todos os colaboradores
colaboradores = listar_colaboradores()
print("\n📋 Lista de colaboradores cadastrados:\n")
for c in colaboradores:
    print(f"🧑 {c['name']} | Cargo: {c['cargo_atual']} | Setor: {c['setor']} | Status: {c.get('status_vaga', 'N/A')}")


#---------------------------------------------------GESTOR---------------------------------------------------

# Criando um gestor
gestor1 = Gestor(
    id=1,
    nome="Carlos Silva", # 'nome' está correto para Gestor conforme o modelo
    email="carlos.silva@empresa.com",
    setor_responsavel="Gerente Comercial",
    permissao="Administrador"
)

# Salvando no banco simulado
salvar_gestor(gestor1)

# Listando gestores cadastrados
print("\n📋 Gestores cadastrados:\n")
for g in listar_gestores():
    print(f"- {g['nome']} ({g['setor_responsavel']})")
