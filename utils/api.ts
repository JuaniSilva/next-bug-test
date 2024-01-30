export interface State {
  id: number;
  name: string;
}
export const api = {
  state: [{ id: 1, name: 'test' }],
  async getState(): Promise<State[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.state);
      }, 1000);
    });
  },
  async updateName(id: number, name: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.state = this.state.map((item) => {
          if (item.id === id) {
            return { ...item, name };
          }
          return item;
        });
        resolve(this.state);
      }, 1000);
    });
  }
};
