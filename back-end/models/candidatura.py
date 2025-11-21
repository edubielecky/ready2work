# models/candidatura.py
from datetime import datetime

class Candidatura:
    def __init__(self, id, id_colaborador, id_vaga):
        self.id = id
        self.id_colaborador = id_colaborador
        self.id_vaga = id_vaga
        
        self.status = "em_triagem"
        self.score = 0
        
        self.motivo_recusa = None
        self.id_gestor_atual = None   # Definido durante análise
        self.id_gestor_avaliador = None
        
        self.data = datetime.now()

    def registrar_score(self, score):
        self.score = score

    def definir_status(self, novo_status):
        self.status = novo_status

    def registrar_motivo_recusa(self, motivo, id_gestor):
        self.motivo_recusa = motivo
        self.id_gestor_avaliador = id_gestor
        self.status = "recusado"
