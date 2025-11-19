class Gestor:
    def __init__(self, id, nome, email, setor_responsavel, permissao):
        self.id = id
        self.nome = nome
        self.email = email
        self.setor_responsavel = setor_responsavel
        self.vagas_abertas = []
        self.colaboradores_sob_gestao = []
        self.permissao = permissao

    def abrir_vaga(self, vaga):
        self.vagas_abertas.append(vaga)
        print(f"✅ vaga '{vaga}' aberta pelo gestor: {self.nome}.")
    
    def lista_de_colaboradores(self, colaborador):
        self.colaboradores_sob_gestao.append(colaborador)
        print(f"👔 Colaborador '{colaborador}' adicionado sob gestão de {self.nome}.")