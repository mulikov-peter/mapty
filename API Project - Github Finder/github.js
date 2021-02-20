'use strict';
class Github {
  constructor() {
    this.client_id = 'a72d9162c50188bd21ad';
    this.client_secret = '3f63e0c4d0d68527fec474f8542b1c99ca08e3bb';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
