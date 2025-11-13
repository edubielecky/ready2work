class Colaborador:
    def __init__(self, id, name, email, role, department, manager, joinDate):
        self.id = id
        self.name = name
        self.email = email
        self.role = role
        self.department = department
        self.manager = manager
        self.joinDate = joinDate
        self.skills = [] # Habilidades técnicas (hard skills)
        self.careerHistory = [] # Histórico de carreira
        self.soft_skills = [] # Mantido, pode ser útil no futuro
        self.trainings = [] # Treinamentos e certificações
        self.performanceReview = [] # Avaliações de desempenho
        self.status_vaga = None # Status em processos seletivos internos
        self.applications = [] # Inscrições em vagas
        self.motivo_reprovacao = None # Motivo da reprovação em vaga

    def adicionar_habilidade(self, habilidade):
        self.skills.append(habilidade)
    
    def adicionar_soft_skill(self, skill):
        self.soft_skills.append(skill)

    def atualizar_status_vaga(self, status):
        self.status_vaga = status
    
    def registrar_reprovacao(self, motivo):
        self.motivo_reprovacao = motivo
