export interface BaseRepository<T> {
    save(data: T): Promise<void>;
    update(id: string, data: Partial<T>): Promise<T>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<T>;
}