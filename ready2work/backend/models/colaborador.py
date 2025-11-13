class Colaborador:
    def __init__(self, id, nome, email, cargo_atual, setor, gestor, tempo_empresa):
        self.id = id
        self.nome = nome
        self.email = email
        self.cargo_atual = cargo_atual
        self.setor = setor
        self.gestor = gestor
        self.tempo_empresa = tempo_empresa
        self.habilidades_tecnicas = []
        self.soft_skills = []
        self.trilhas_aprendizados = []
        self.avaliacao_desempenho = []
        self.status_vaga = None
        self.motivo_reprovacao = None

    def adicionar_habilidade(self, habilidade):
        self.habilidades_tecnicas.append(habilidade)
    
    def adicionar_soft_skill(self, skill):
        self.soft_skills.append(skill)

    def atualizar_status_vaga(self, status):
        self.status_vaga = status
    
    def registrar_reprovacao(self, motivo):
        self.motivo_reprovacao = motivo
