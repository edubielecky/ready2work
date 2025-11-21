class Diretoria:
    def __init__(self, id_colaborador, cargo):
        self.id_colaborador = id_colaborador       # referência ao Colaborador
        self.cargo = cargo                         # cargo oficial na diretoria
        self.permissao = "DIRETORIA"               # nível máximo de acesso
        
        self.gestores_responsaveis = []            # lista de IDs de gestores sob a diretoria
        self.motivos_recusa_visiveis = []          # motivos de recusa que serão exibidos no sistema

    # ---------- GESTÃO DE GESTORES ----------
    def adicionar_gestor(self, gestor_id):
        if gestor_id not in self.gestores_responsaveis:
            self.gestores_responsaveis.append(gestor_id)

    def listar_gestores(self):
        return self.gestores_responsaveis

    # ---------- MOTIVOS DE RECUSA ----------
    def registrar_motivo_recusa(self, motivo):
        self.motivos_recusa_visiveis.append(motivo)

    def listar_motivos_recusa(self):
        return self.motivos_recusa_visiveis
