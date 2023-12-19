export default {
    // Repositories
    JobRepository: Symbol.for("JobRepository"),
    // Services
    CreateJobUseCase: Symbol.for("CreateJobUseCase"),
    GetJobUseCase: Symbol.for("GetJobUseCase"),
    GetAllJobsUseCase: Symbol.for("GetAllJobsUseCase"),
    UpdateJobUseCase: Symbol.for("UpdateJobUseCase"),
    DeleteJobUseCase: Symbol.for("DeleteJobUseCase"),
    
    DbClient: Symbol.for("DbClient"),
}