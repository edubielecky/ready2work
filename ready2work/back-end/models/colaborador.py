class Colaborador:
    def __init__(self, id, nome, email, cargo_atual, setor, gestor, tempo_empresa):
        self.id = id
        self.nome = nome
        self.email = email
        self.cargo_atual = cargo_atual
        self.setor = setor
        self.gestor = gestor # gestor atual
        self.tempo_empresa = tempo_empresa
        self.habilidades_tecnicas = []
        self.soft_skills = []
        self.trilhas_aprendizados = []
        self.avaliacao_desempenho = [] #avaliação de desempenho do colaborador
        self.historico_carreira = [] #historico de carreira/função do colaborador
        self.treinamento_e_certificado = [] #Local para adicionar certificado e treinamento que a empresa disponibilizou para o colaborador
        self.inscricao_vaga = [] #Lista das vagas que o colaborador se inscreveu
        self.status_vaga = None
        self.motivo_reprovacao = None

    def adicionar_habilidade(self, habilidade):
        self.habilidades_tecnicas.append(habilidade)
    
    def adicionar_soft_skill(self, skill):
        self.soft_skills.append(skill)

    def atualizar_status_vaga(self, status):
        self.status_vaga = status

    def inscricao_de_vaga(self, inscricao_vaga):
        self.inscricao_de_vaga.append(inscricao_vaga)
    
    def registrar_reprovacao(self, motivo):
        self.motivo_reprovacao = motivo