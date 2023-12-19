import { Container } from "inversify";
import "reflect-metadata";
import CreateJobUseCase from "../core/usecase/create-job/usecase";
import tokens from "./tokens";
import JobRepository from "../core/repository/job-repository";
import DrizzleJobRepository from "../infra/repository/drizzle-job-repository";
import GetJobUseCase from "../core/usecase/get-job/usecase";
import GetAllJobsUseCase from "../core/usecase/get-all-jobs/usecase";
import DeleteJobUseCase from "../core/usecase/delete-job/usecase";
import UpdateJobUseCase from "../core/usecase/update-job/usecase";

var container = new Container();
container.bind<CreateJobUseCase>(tokens.CreateJobUseCase).to(CreateJobUseCase).inSingletonScope();
container.bind<GetJobUseCase>(tokens.GetJobUseCase).to(GetJobUseCase).inSingletonScope();
container.bind<GetAllJobsUseCase>(tokens.GetAllJobsUseCase).to(GetAllJobsUseCase).inSingletonScope();
container.bind<DeleteJobUseCase>(tokens.DeleteJobUseCase).to(DeleteJobUseCase).inSingletonScope();
container.bind<UpdateJobUseCase>(tokens.UpdateJobUseCase).to(UpdateJobUseCase).inSingletonScope();

container.bind<JobRepository>(tokens.JobRepository).to(DrizzleJobRepository).inSingletonScope();

export default container;