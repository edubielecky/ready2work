#database
from database.db_mock import salvar_colaborador, listar_colaboradores, salvar_gestor, listar_gestores
#colaborador
from models.colaborador import Colaborador
#gestor
from models.gestor import Gestor

# Criando um novo colaborador
colab1 = Colaborador(1, "João Silva", "joao@empresa.com", "Assistente Técnico", "Eduardo Bielecky", "Manutenção", 2)
colab1.adicionar_habilidade("Soldagem")
colab1.adicionar_soft_skill("Trabalho em equipe")
colab1.avaliacao_desempenho.append(8.7)
colab1.atualizar_status_vaga("Em análise")

# Salvando o colaborador no mock
salvar_colaborador(colab1)

# Listando todos os colaboradores
colaboradores = listar_colaboradores()

print("\n📋 Lista de colaboradores cadastrados:\n")
for c in colaboradores:
    print(f"🧑 {c['nome']} | Cargo: {c['cargo_atual']} | Setor: {c['setor']} | Status: {c['status_vaga']}")


#---------------------------------------------------GESTOR---------------------------------------------------

# Criando um gestor
gestor1 = Gestor(
    id=1,
    nome="Carlos Silva",
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
