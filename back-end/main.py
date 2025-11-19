# database
from database.db_mock import (
    salvar_colaborador, listar_colaboradores,
    salvar_gestor, listar_gestores,
    salvar_diretoria,
    salvar_rh,
    salvar_vaga, listar_vagas,
    salvar_candidatura, listar_candidaturas
)

# models
from models.colaborador import Colaborador
from models.gestor import Gestor
from models.vaga_interna import VagaInterna
from models.candidatura import Candidatura
from models.rh import Rh
from models.diretoria import Diretoria

# -----------------------------
# CADASTRAR COLABORADORES
# -----------------------------
colab1 = Colaborador(
    id=1,
    nome="João Silva",
    email="joao.silva@empresa.com",
    cargo="Assistente Técnico",
    setor="Manutenção",
    id_gestor_atual=99,
    data_admissao="2023-05-15"
)

colab1.adicionar_habilidade({"nome": "Soldagem", "nivel": "Intermediário"})
colab1.adicionar_soft_skill("Trabalho em equipe")

salvar_colaborador(colab1)


# --------------------------------
# CADASTRAR GESTOR DO COLABORADOR
# --------------------------------
gestor_atual = Gestor(id_colaborador=99)
gestor_atual.adicionar_colaborador(colab1.id)
salvar_gestor(gestor_atual)


# --------------------------------
# CADASTRAR RH & DIRETORIA
# --------------------------------
rh = Rh(id_colaborador=50)
salvar_rh(rh)

diretor = Diretoria(id_colaborador=10, cargo="Diretor Operacional")
salvar_diretoria(diretor)


# --------------------------------
# FLUXO 1 — CRIAÇÃO DA VAGA
# --------------------------------
vaga = VagaInterna(
    id=101,
    titulo="Técnico Pleno",
    descricao="Responsável por manutenção de máquinas industriais.",
    requisitos_tecnicos=["Manutenção elétrica", "NR10"],
    requisitos_soft=["Comunicação", "Proatividade"],
    setor="Manutenção",
    id_gestor_dono=99
)

print("\n📌 Vaga criada e aguardando validação do RH.")
salvar_vaga(vaga)


# --------------------------------
# FLUXO 1 — RH valida a vaga
# --------------------------------
vaga.validar_rh()
salvar_vaga(vaga)
print("📌 RH aprovou a vaga. Status:", vaga.status)


# --------------------------------
# FLUXO 2 — CANDIDATURA
# --------------------------------
candidatura = Candidatura(
    id=5001,
    id_colaborador=colab1.id,
    id_vaga=vaga.id
)

# TRIAGEM AUTOMÁTICA (simples para exemplo)
score = 85
candidatura.registrar_score(score)

if score >= 60:
    candidatura.definir_status("aguardando_gestor_atual")
    candidatura.id_gestor_atual = colab1.id_gestor_atual
else:
    candidatura.registrar_motivo_recusa("Perfil abaixo do mínimo definido", None)

salvar_candidatura(candidatura)

print("\n📌 Score calculado:", score)
print("📌 Status da candidatura:", candidatura.status)


# --------------------------------
# FLUXO 3 — GESTOR ATUAL APROVA
# --------------------------------
if candidatura.status == "aguardando_gestor_atual":
    candidatura.definir_status("aprovado")
    salvar_candidatura(candidatura)
    print("\n📌 Gestor atual aprovou! Candidatura agora está:", candidatura.status)


# --------------------------------
# FLUXO 4 — VISUALIZAÇÃO DE MOTIVO (apenas Diretoria)
# --------------------------------
print("\n📌 Auditoria — Diretoria pode ver motivos de recusa:")
for c in listar_candidaturas():
    if c["motivo_recusa"]:
        print(f"- Candidatura {c['id']} | Motivo: {c['motivo_recusa']}")


# --------------------------------
# MOSTRAR RESUMOS
# --------------------------------
print("\n📋 COLABORADORES:")
print(listar_colaboradores())

print("\n📋 GESTORES:")
print(listar_gestores())

print("\n📋 VAGAS:")
print(listar_vagas())

print("\n📋 CANDIDATURAS:")
print(listar_candidaturas())
