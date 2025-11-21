# db_mock.py (refatorado, padronizado e corrigido)

import json
import os
from typing import Any, List

# ---------------------------------------
# FUNÇÕES GENÉRICAS DE LEITURA E ESCRITA
# ---------------------------------------


def carregar_json(caminho: str) -> List[Any]:
    """Carrega dados JSON de um arquivo.

    Retorna uma lista vazia caso o arquivo não exista ou esteja inválido.
    """
    if not os.path.exists(caminho):
        return []

    try:
        with open(caminho, "r", encoding="utf-8") as f:
            content = f.read()
            return json.loads(content) if content else []
    except json.JSONDecodeError:
        return []


def salvar_json(caminho: str, dados: Any) -> None:
    """Salva dados em um arquivo JSON, criando diretório se necessário."""
    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    with open(caminho, "w", encoding="utf-8") as f:
        json.dump(dados, f, indent=4, ensure_ascii=False)


# ---------------------------------------
# HELPERS PARA PADRONIZAÇÃO
# ---------------------------------------

def evitar_duplicidade(lista: list, chave: str, valor: Any) -> bool:
    """Retorna True caso a chave já exista na lista de registros."""
    return any(item.get(chave) == valor for item in lista)


# ---------------------------------------
# COLABORADORES
# ---------------------------------------

COLAB_DIR = "database_colaborador"
COLAB_PATH = os.path.join(COLAB_DIR, "colaboradores.json")


def salvar_colaborador(colaborador):
    data = carregar_json(COLAB_PATH)

    # Evita duplicações por ID ou Email
    if evitar_duplicidade(data, "id", colaborador.id) or evitar_duplicidade(data, "email", colaborador.email):
        print(f"⚠️ O colaborador com ID {colaborador.id} ou email {colaborador.email} já está cadastrado.")
        return

    colaborador_dict = colaborador.__dict__.copy()
    data.append(colaborador_dict)
    salvar_json(COLAB_PATH, data)


def listar_colaboradores():
    return carregar_json(COLAB_PATH)


# ---------------------------------------
# GESTORES
# ---------------------------------------

GESTOR_DIR = "database_gestor"
GESTOR_PATH = os.path.join(GESTOR_DIR, "gestores.json")


def salvar_gestor(gestor):
    data = carregar_json(GESTOR_PATH)

    if evitar_duplicidade(data, "id_colaborador", gestor.id_colaborador):
        print("⚠️ Esse gestor já está registrado!")
        return

    data.append(gestor.__dict__.copy())
    salvar_json(GESTOR_PATH, data)


def listar_gestores():
    return carregar_json(GESTOR_PATH)


# ---------------------------------------
# RH
# ---------------------------------------

RH_DIR = "database_rh"
RH_PATH = os.path.join(RH_DIR, "rh.json")


def salvar_rh(rh):
    data = carregar_json(RH_PATH)

    if evitar_duplicidade(data, "id_colaborador", rh.id_colaborador):
        print("⚠️ RH já registrado!")
        return

    data.append(rh.__dict__.copy())
    salvar_json(RH_PATH, data)

def listar_rh():
    return carregar_json(DIR_PATH)


# ---------------------------------------
# DIRETORIA
# ---------------------------------------

DIR_DIR = "database_diretoria"
DIR_PATH = os.path.join(DIR_DIR, "diretoria.json")


def salvar_diretoria(diretoria):
    data = carregar_json(DIR_PATH)

    if evitar_duplicidade(data, "id_colaborador", diretoria.id_colaborador):
        print("⚠️ Diretor já registrado!")
        return

    data.append(diretoria.__dict__.copy())
    salvar_json(DIR_PATH, data)


def listar_diretoria():
    return carregar_json(DIR_PATH)


# ---------------------------------------
# VAGAS INTERNAS
# ---------------------------------------

VAGA_DIR = "database_vagas"
VAGA_PATH = os.path.join(VAGA_DIR, "vagas.json")


def salvar_vaga(vaga):
    data = carregar_json(VAGA_PATH)

    if evitar_duplicidade(data, "id", vaga.id):
        print("⚠️ Vaga já cadastrada!")
        return

    vaga_dict = vaga.__dict__.copy()

    # Converte datetime para string
    if hasattr(vaga, "data_criacao"):
        vaga_dict["data_criacao"] = vaga.data_criacao.isoformat()

    data.append(vaga_dict)
    salvar_json(VAGA_PATH, data)


def listar_vagas():
    return carregar_json(VAGA_PATH)


# ---------------------------------------
# CANDIDATURAS
# ---------------------------------------

CAND_DIR = "database_candidaturas"
CAND_PATH = os.path.join(CAND_DIR, "candidaturas.json")


def salvar_candidatura(c):
    data = carregar_json(CAND_PATH)

    if evitar_duplicidade(data, "id", c.id):
        print("⚠️ Candidatura já existe")
        return

    cand_dict = c.__dict__.copy()

    # Converte datetime para string
    if hasattr(c, "data"):
        cand_dict["data"] = c.data.isoformat()

    data.append(cand_dict)
    salvar_json(CAND_PATH, data)


def listar_candidaturas():
    return carregar_json(CAND_PATH)
