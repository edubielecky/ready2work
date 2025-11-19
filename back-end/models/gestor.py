class Gestor:
    def __init__(self, id_colaborador):
        self.id_colaborador = id_colaborador       # referência ao Colaborador
        self.permissao = "GESTOR"                  # papel
        self.equipes = []                          # lista de IDs de colaboradores
        self.vagas_abertas = []                    # lista de IDs de Vagas

    def adicionar_colaborador(self, colaborador_id):
        self.equipes.append(colaborador_id)

    def registrar_vaga_aberta(self, vaga_id):
        self.vagas_abertas.append(vaga_id)
