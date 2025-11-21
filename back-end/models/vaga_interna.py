from datetime import datetime

class VagaInterna:
    def __init__(self, id, titulo, descricao, requisitos_tecnicos, requisitos_soft, setor, id_gestor_dono):
        self.id = id
        self.titulo = titulo
        self.descricao = descricao
        self.requisitos_tecnicos = requisitos_tecnicos or []
        self.requisitos_soft = requisitos_soft or []
        self.setor = setor
        self.id_gestor_dono = id_gestor_dono

        # Fluxo de aprovação
        self.status = "pendente_validacao_RH"  
        
        # Auditoria
        self.data_criacao = datetime.now()
        
        # Lista de IDs de candidaturas
        self.candidatos = []

    # ------------- AÇÕES DO GESTOR -------------
    def adicionar_requisito_tecnico(self, requisito):
        self.requisitos_tecnicos.append(requisito)

    def adicionar_requisito_soft(self, skill):
        self.requisitos_soft.append(skill)

    def receber_candidatura(self, candidatura_id):
        self.candidatos.append(candidatura_id)

    # ------------- AÇÕES DO RH -------------
    def validar_rh(self):
        """RH aprova e libera a vaga para publicação."""
        if self.status == "pendente_validacao_RH":
            self.status = "publicada"

    # ------------- AÇÕES DA DIRETORIA -------------
    def fechar_vaga(self, motivo=None):
        """Diretoria ou RH podem fechar a vaga."""
        self.status = "fechada"
        self.motivo_fechamento = motivo

    # ------------- CONSULTAS -------------
    def listar_candidatos(self):
        return self.candidatos

    def resumo(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "setor": self.setor,
            "status": self.status,
            "data_criacao": self.data_criacao.strftime('%d/%m/%Y'),
            "total_candidatos": len(self.candidatos)
        }
