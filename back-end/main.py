# main.py (corrigido)
# Script de exemplo que demonstra os fluxos principais do sistema:
# - cadastro de colaborador
# - cadastro de gestor / RH / diretoria
# - criação e validação de vaga
# - candidatura e fluxo de aprovação

from database.db_mock import (
    salvar_colaborador, listar_colaboradores,
    salvar_gestor, listar_gestores,
    salvar_diretoria, listar_diretoria,
    salvar_rh, listar_rh,
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
# HELPERS LOCAIS
# -----------------------------

def imprimir_titulo(t):
    print("\n" + "📌 " + t)


# -----------------------------
# CADASTRAR COLABORADORES
# -----------------------------
imprimir_titulo("Cadastro de Colaborador")
colab1 = Colaborador(
    id=1,
    nome="João Silva",
    email="joao.silva@empresa.com",
    cargo="Assistente Técnico",
    setor="Manutenção",
    id_gestor_atual=99,
    data_admissao="2023-05-15"
)

# adicionar skills e histórico
colab1.adicionar_habilidade({"nome": "Soldagem", "nivel": "Intermediário"})
colab1.adicionar_soft_skill("Trabalho em equipe")

# registra no "banco"
salvar_colaborador(colab1)
print("Colaborador salvo:", colab1.nome)


# --------------------------------
# CADASTRAR GESTOR DO COLABORADOR
# --------------------------------
imprimir_titulo("Cadastro de Gestor")
# Observação: o ID do gestor (99) deveria existir como colaborador em produção.
# Aqui apenas registramos a entidade Gestor para efeitos do fluxo.
gestor_atual = Gestor(id_colaborador=99)
gestor_atual.adicionar_colaborador(colab1.id)
salvar_gestor(gestor_atual)
print("Gestor salvo (id_colaborador=99)")


# --------------------------------
# CADASTRAR RH & DIRETORIA
# --------------------------------
imprimir_titulo("Cadastro de RH e Diretoria")
rh = Rh(id_colaborador=50)
salvar_rh(rh)
print("RH salvo (id_colaborador=50)")

diretor = Diretoria(id_colaborador=10, cargo="Diretor Operacional")
salvar_diretoria(diretor)
print("Diretoria salva (id_colaborador=10)")


# --------------------------------
# FLUXO 1 — CRIAÇÃO DA VAGA
# --------------------------------
imprimir_titulo("Criação da Vaga")
vaga = VagaInterna(
    id=101,
    titulo="Técnico Pleno",
    descricao="Responsável por manutenção de máquinas industriais.",
    requisitos_tecnicos=["Manutenção elétrica", "NR10"],
    requisitos_soft=["Comunicação", "Proatividade"],
    setor="Manutenção",
    id_gestor_dono=99
)

print("Vaga criada localmente. Status:", vaga.status)
# salvar a vaga (se o db_mock suportar atualização, ele deve sobrescrever)
salvar_vaga(vaga)
print("Vaga persistida com id", vaga.id)


# --------------------------------
# FLUXO 1 — RH valida a vaga
# --------------------------------
imprimir_titulo("Validação RH da Vaga")
# Simula ação do RH aprovando a vaga
vaga.validar_rh()
# garante que a alteração seja persistida
salvar_vaga(vaga)
print("RH aprovou a vaga. Status:", vaga.status)


# --------------------------------
# FLUXO 2 — CANDIDATURA
# --------------------------------
imprimir_titulo("Criação de Candidatura")
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

# Persistir candidatura
salvar_candidatura(candidatura)
print("Candidatura salva. Status:", candidatura.status)

# Vincular candidatura à vaga e ao colaborador (manter consistência)
try:
    vaga.receber_candidatura(candidatura.id)
    salvar_vaga(vaga)
except Exception:
    # se receber_candidatura não existir ou salvar_vaga não permitir update, ignoramos
    pass

try:
    colab1.registrar_candidatura(candidatura.id)
    salvar_colaborador(colab1)
except Exception:
    pass

print("Score calculado:", score)


# --------------------------------
# FLUXO 3 — GESTOR ATUAL APROVA
# --------------------------------
imprimir_titulo("Aprovação pelo Gestor Atual")
if candidatura.status == "aguardando_gestor_atual":
    candidatura.definir_status("aprovado")
    salvar_candidatura(candidatura)
    print("Gestor atual aprovou! Candidatura agora está:", candidatura.status)


# --------------------------------
# FLUXO 4 — VISUALIZAÇÃO DE MOTIVO (apenas Diretoria)
# --------------------------------
imprimir_titulo("Auditoria — Visualização de motivos de recusa")
for c in listar_candidaturas():
    if c.get("motivo_recusa"):
        print(f"- Candidatura {c['id']} | Motivo: {c['motivo_recusa']}")


# --------------------------------
# MOSTRAR RESUMOS
# --------------------------------
imprimir_titulo("Resumo - Colaboradores")
print(listar_colaboradores())

imprimir_titulo("Resumo - Gestores")
print(listar_gestores())

imprimir_titulo("Resumo - Vagas")
print(listar_vagas())

imprimir_titulo("Resumo - Candidaturas")
print(listar_candidaturas())

# FIM
print('\n✅ Fluxos executados.')