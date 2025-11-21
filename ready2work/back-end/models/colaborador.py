class Colaborador:
    def __init__(self, id, nome, email, cargo_atual, setor, gestor, tempo_empresa):
        self.id = id
        self.nome = nome
        self.email = email
        self.cargo_atual = cargo_atual
        self.setor = setor
        self.gestor = gestor
        self.tempo_empresa = tempo_empresa
        
        # Inicialização das listas
        self.habilidades_tecnicas = [] 
        self.soft_skills = []
        self.trilhas_aprendizados = []
        self.avaliacao_desempenho = []
        self.historico_carreira = []
        self.treinamento_e_certificado = []
        
        # ATRIBUTO CORRETO DEFINIDO NO __init__
        self.inscricoes_de_vaga = [] 
        
        self.status_vaga = None
        self.motivo_reprovacao = None
    
    def adicionar_habilidade(self, habilidade):
        """Adiciona uma habilidade à lista correta."""
        self.habilidades_tecnicas.append(habilidade)
        
    def salvar_inscricao_vaga(self, inscricao_vaga):
        """
        Usa o nome do atributo 'inscricoes_de_vaga' (plural)
        """
        # Ação: Adiciona a candidatura à lista interna do objeto
        self.inscricoes_de_vaga.append(inscricao_vaga)

    def to_dict(self):
        """Retorna o objeto Colaborador como um dicionário (JSON-serializável)."""
        return {
            'id': self.id,
            'nome': self.nome,
            'email': self.email,
            'cargo_atual': self.cargo_atual,
            'setor': self.setor,
            'gestor': self.gestor,
            'tempo_empresa': self.tempo_empresa,
            
            # Todos os atributos populados pelo seed
            'habilidades_tecnicas': self.habilidades_tecnicas, 
            'soft_skills': self.soft_skills,
            'trilhas_aprendizados': self.trilhas_aprendizados,
            'avaliacao_desempenho': self.avaliacao_desempenho,
            'historico_carreira': self.historico_carreira,
            'treinamento_e_certificado': self.treinamento_e_certificado,
            
            # CORREÇÃO FINAL AQUI: Usando o nome correto do atributo (inscricoes_de_vaga)
            'inscricoes_de_vaga': self.inscricoes_de_vaga 
        }