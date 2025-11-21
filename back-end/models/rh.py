class Rh:
    def __init__(self, id_colaborador):
        self.id_colaborador = id_colaborador      # Referência ao Colaborador que atua como RH
        self.permissao = "RH"
        
        # Gestão de pessoas
        self.colaboradores = []                   # IDs dos colaboradores cadastrados no sistema
        
        # Gestão de vagas
        self.vagas_abertas = []                   # IDs de vagas abertas
        self.vagas_fechadas = []                  # IDs de vagas fechadas

    # ---------- GESTÃO DE COLABORADORES ----------
    def adicionar_colaborador(self, colaborador_id):
        if colaborador_id not in self.colaboradores:
            self.colaboradores.append(colaborador_id)

    def listar_colaboradores(self):
        return self.colaboradores

    # ---------- GESTÃO DE VAGAS ----------
    def registrar_vaga_aberta(self, vaga_id):
        if vaga_id not in self.vagas_abertas:
            self.vagas_abertas.append(vaga_id)

    def fechar_vaga(self, vaga_id):
        if vaga_id in self.vagas_abertas:
            self.vagas_abertas.remove(vaga_id)
            self.vagas_fechadas.append(vaga_id)

    def listar_vagas(self):
        return {
            "abertas": self.vagas_abertas,
            "fechadas": self.vagas_fechadas
        }
