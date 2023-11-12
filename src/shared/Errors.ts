const Errors = {
    USUARIO_NOT_EXIST: 'Usuario não exsite.' ,
    USUARIO_EXIST: 'Usuario Existente.',
    USERNAME_PASSOWRD: 'É nescessario um Username e Password para cadastrar um Usuario.',
    LOGIN_USERNAME_PASSOWRD: 'É nescessario um Username e Password para realizar login.',
    ERROR_CREDENTIAL: 'Login ou Senha inválidoS.',
    ERROR_CREATE_TASK: 'É necessário nome, descrição e ProjectId para a criacao de uma Tarefa.',
    ERROR_DELETE_TASK: 'É necessário um id para deletar uma task.',
    ERROR_CREATE_PROJECT: 'É necessário nome para a criacao de um projeto.',
    ERROR_DELETE_PROJECT: 'É necessário um id para deletar um projeto.',
    ERROR_CREATE_TIME_TRACKER: 'É necessário que todos os campos sejam preenchidos.',
    ERROR_CREATE_TIME_TRACKER_CONFLITS_INTERVAL: 'Existe um conflito de tempo com as outras Tarefas.',
    ERROR_CREATE_TIME_TRACKER_DATE: 'Data Inválida. Verifique se a data inicial é maior que a final.'

} as const

export default Errors