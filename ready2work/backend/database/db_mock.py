import json
import os
from models.colaborador import Colaborador

#-----------------------------colaborador-----------------------------
# Caminho para o banco simulado
DATA_DIR = "database_colaborador"
DATA_PATH = os.path.join(DATA_DIR, "colaboradores.json")

# Cria a pasta automaticamente, caso não exista
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

def salvar_colaborador(colaborador):
    try:
        with open(DATA_PATH, "r") as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []

    for colaboradores in data:
        if colaboradores ["id"] == colaborador.id or colaboradores["email"] == colaborador.email:
            print(f"⚠️ O colaborador {colaborador.nome} já está cadastrado. Nenhuma ação necessária.")
            return

    data.append(colaborador.__dict__)  # salva como dicionário

    with open(DATA_PATH, "w") as f:
        json.dump(data, f, indent=4)

def listar_colaboradores():
    try:
        with open(DATA_PATH, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

#-----------------------------Gestor-----------------------------

#Caminho para o banco simulado do gestor
GESTOR_DIR = "database_Gestor"
GESTOR_PATH = os.path.join(GESTOR_DIR, "gestores.json")

#cria pasta automaticamente caso não exista
if not os.path.exists(GESTOR_DIR):
    os.makedirs(GESTOR_DIR)

def salvar_gestor(gestor):
    try:
        with open (GESTOR_PATH, "r") as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []

    for g in data:
        if g["id"] == gestor.id or g["email"] == gestor.email:
             print(f"⚠️ O gestor {gestor.nome} já está cadastrado.")
        return
    
    data.append(gestor.__dict__)

    with open (GESTOR_PATH, "w") as f:
        json.dump(data, f, indent=4)

def listar_gestores():
    try:
        with open(GESTOR_PATH, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

