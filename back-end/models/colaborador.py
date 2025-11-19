class Colaborador:
    def __init__(self, id, nome, email, cargo, setor, id_gestor_atual, data_admissao):
        self.id = id
        self.nome = nome
        self.email = email
        self.cargo = cargo
        self.setor = setor
        self.id_gestor_atual = id_gestor_atual
        self.data_admissao = data_admissao
        
        # HARD & SOFT SKILLS
        self.habilidades_tecnicas = []     # Do modelo antigo
        self.soft_skills = []              # Do modelo antigo

        # DESENVOLVIMENTO / CARREIRA
        self.trilhas_aprendizado = []      # Novo nome para trilhas_aprendizados
        self.treinamentos_e_certificados = []  # Do modelo antigo
        self.historico_performance = []    # Novo + equivalente antigo
        self.historico_cargos = []         # Novo + equivalente antigo

        # RELAÇÃO COM PROCESSOS
        self.candidaturas = []  # substitui "inscricao_vaga"
        
        # PERMISSÕES DO SISTEMA
        self.roles = ["COLABORADOR"]

    # -----------------------
    # MÉTODOS DE MANUTENÇÃO
    # -----------------------
    def adicionar_habilidade(self, habilidade):
        self.habilidades_tecnicas.append(habilidade)
    
    def adicionar_soft_skill(self, skill):
        self.soft_skills.append(skill)

    def adicionar_treinamento(self, treinamento):
        self.treinamentos_e_certificados.append(treinamento)

    def registrar_performance(self, avaliacao):
        self.historico_performance.append(avaliacao)

    def adicionar_experiencia(self, cargo):
        self.historico_cargos.append(cargo)

    def registrar_candidatura(self, candidatura_id):
        self.candidaturas.append(candidatura_id)
