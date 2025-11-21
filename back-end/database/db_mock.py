import json
import os

# ---------------------------------------
# FUNÇÃO GENÉRICA PARA LEITURA E ESCRITA
# ---------------------------------------

def carregar_json(caminho):
    if not os.path.exists(caminho):
        return []

    try:
        with open(caminho, "r", encoding="utf-8") as f:
            content = f.read()
            return json.loads(content) if content else []
    except json.JSONDecodeError:
        return []


def salvar_json(caminho, dados):
    with open(caminho, "w", encoding="utf-8") as f:
        json.dump(dados, f, indent=4, ensure_ascii=False)


# -----------------------------------------------------------------
# COLABORADORES
# -----------------------------------------------------------------

COLAB_DIR = "database_colaborador"
COLAB_PATH = os.path.join(COLAB_DIR, "colaboradores.json")
os.makedirs(COLAB_DIR, exist_ok=True)

def salvar_colaborador(colaborador):
    data = carregar_json(COLAB_PATH)

    # Impede duplicação por ID ou Email
    for c in data:
        if c["id"] == colaborador.id or c["email"] == colaborador.email:
            print(f"⚠️ O colaborador com ID {colaborador.id} ou email {colaborador.email} já está cadastrado.")
            return

    colaborador_dict = {
        "id": colaborador.id,
        "nome": colaborador.nome,
        "email": colaborador.email,
        "cargo": colaborador.cargo,
        "setor": colaborador.setor,
        "id_gestor_atual": colaborador.id_gestor_atual,
        "data_admissao": colaborador.data_admissao,
        "habilidades_tecnicas": colaborador.habilidades_tecnicas,
        "soft_skills": colaborador.soft_skills,
        "trilhas_aprendizado": colaborador.trilhas_aprendizado,
        "treinamentos_e_certificados": colaborador.treinamentos_e_certificados,
        "historico_performance": colaborador.historico_performance,
        "historico_cargos": colaborador.historico_cargos,
        "candidaturas": colaborador.candidaturas,
        "roles": colaborador.roles
    }

    data.append(colaborador_dict)
    salvar_json(COLAB_PATH, data)

def listar_colaboradores():
    return carregar_json(COLAB_PATH)


# -----------------------------------------------------------------
# GESTORES
# -----------------------------------------------------------------

GESTOR_DIR = "database_gestor"
GESTOR_PATH = os.path.join(GESTOR_DIR, "gestores.json")
os.makedirs(GESTOR_DIR, exist_ok=True)

def salvar_gestor(gestor):
    data = carregar_json(GESTOR_PATH)

    for g in data:
        if g["id_colaborador"] == gestor.id_colaborador:
            print("⚠️ Esse gestor já está registrado!")
            return

    data.append({
        "id_colaborador": gestor.id_colaborador,
        "permissao": gestor.permissao,
        "equipes": gestor.equipes,
        "vagas_abertas": gestor.vagas_abertas
    })

    salvar_json(GESTOR_PATH, data)

def listar_gestores():
    return carregar_json(GESTOR_PATH)


# -----------------------------------------------------------------
# RH (opcional — só se quiser salvar)
# -----------------------------------------------------------------

RH_DIR = "database_rh"
RH_PATH = os.path.join(RH_DIR, "rh.json")
os.makedirs(RH_DIR, exist_ok=True)

def salvar_rh(rh):
    data = carregar_json(RH_PATH)

    for item in data:
        if item["id_colaborador"] == rh.id_colaborador:
            print("⚠️ RH já registrado!")
            return

    data.append({
        "id_colaborador": rh.id_colaborador,
        "permissao": rh.permissao,
        "colaboradores": rh.colaboradores,
        "vagas_abertas": rh.vagas_abertas,
        "vagas_fechadas": rh.vagas_fechadas
    })

    salvar_json(RH_PATH, data)


# -----------------------------------------------------------------
# DIRETORIA
# -----------------------------------------------------------------

DIR_DIR = "database_diretoria"
DIR_PATH = os.path.join(DIR_DIR, "diretoria.json")
os.makedirs(DIR_DIR, exist_ok=True)

def salvar_diretoria(diretoria):
    data = carregar_json(DIR_PATH)

    for d in data:
        if d["id_colaborador"] == diretoria.id_colaborador:
            print("⚠️ Diretor já registrado!")
            return

    data.append({
        "id_colaborador": diretoria.id_colaborador,
        "cargo": diretoria.cargo,
        "gestores_responsaveis": diretoria.gestores_responsaveis,
        "motivos_recusa_visiveis": diretoria.motivos_recusa_visiveis
    })

    salvar_json(DIR_PATH, data)


# -----------------------------------------------------------------
# VAGAS INTERNAS
# -----------------------------------------------------------------

VAGA_DIR = "database_vagas"
VAGA_PATH = os.path.join(VAGA_DIR, "vagas.json")
os.makedirs(VAGA_DIR, exist_ok=True)

def salvar_vaga(vaga):
    data = carregar_json(VAGA_PATH)

    for v in data:
        if v["id"] == vaga.id:
            print("⚠️ Vaga já cadastrada!")
            return

    data.append({
        "id": vaga.id,
        "titulo": vaga.titulo,
        "descricao": vaga.descricao,
        "requisitos_tecnicos": vaga.requisitos_tecnicos,
        "requisitos_soft": vaga.requisitos_soft,
        "setor": vaga.setor,
        "id_gestor_dono": vaga.id_gestor_dono,
        "status": vaga.status,
        "data_criacao": vaga.data_criacao.isoformat(),
        "candidatos": vaga.candidatos
    })

    salvar_json(VAGA_PATH, data)

def listar_vagas():
    return carregar_json(VAGA_PATH)

# -----------------------------------------------------------------
# CANDIDATURAS
# -----------------------------------------------------------------

CAND_DIR = "database_candidaturas"
CAND_PATH = os.path.join(CAND_DIR, "candidaturas.json")
os.makedirs(CAND_DIR, exist_ok=True)


def salvar_candidatura(c):
    data = carregar_json(CAND_PATH)

    for item in data:
        if item["id"] == c.id:
            print("⚠️ Candidatura já existe")
            return

    data.append({
        "id": c.id,
        "id_colaborador": c.id_colaborador,
        "id_vaga": c.id_vaga,
        "status": c.status,
        "score": c.score,
        "motivo_recusa": c.motivo_recusa,
        "id_gestor_atual": c.id_gestor_atual,
        "id_gestor_avaliador": c.id_gestor_avaliador,
        "data": c.data.isoformat()
    })

    salvar_json(CAND_PATH, data)


def listar_candidaturas():
    return carregar_json(CAND_PATH)
