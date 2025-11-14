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
    data = []
    if os.path.exists(DATA_PATH):
        try:
            with open(DATA_PATH, "r", encoding='utf-8') as f:
                content = f.read()
                if content: # Apenas tenta carregar se o arquivo não estiver vazio
                    data = json.loads(content)
        except json.JSONDecodeError:
            # Se o arquivo estiver malformado, trata como se estivesse vazio
            pass

    for c in data:
        if c["id"] == colaborador.id or c["email"] == colaborador.email:
            print(f"⚠️ O colaborador com ID {colaborador.id} ou email {colaborador.email} já está cadastrado.")
            return

    # Transforma o objeto em um dicionário para salvar no JSON
    colaborador_dict = {
        "id": colaborador.id,
        "name": colaborador.name,
        "email": colaborador.email,
        "role": colaborador.role,
        "department": colaborador.department,
        "applications": colaborador.applications # Garante que as inscrições sejam salvas
    }
    data.append(colaborador_dict)

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
