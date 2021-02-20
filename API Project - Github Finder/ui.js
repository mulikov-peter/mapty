class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  // Display profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-3" src="${user.avatar_url}">
          <a href="${
            user.html_url
          }" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${
            user.public_repos
          }</span>
          <span class="badge badge-info">Public Gists: ${
            user.public_gists
          }</span>
          <span class="badge badge-primary">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
          <li class="list-group-item">Name: ${
            user.name ? user.name : 'No name :('
          }</li>
            <li class="list-group-item">Company: ${
              user.company ? user.company : 'No company'
            }</li>
            <li class="list-group-item">Website/Blog: ${user.blog}
            </li>
            <li class="list-group-item">Location: ${
              user.location ? user.location : ''
            }</li>
            <li class="list-group-item">Member Since: ${new Date(
              user.created_at
            ).toDateString()}</li>
            <li class="list-group-item">Last Seen: ${new Date(
              user.updated_at
            ).toDateString()}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div class="repos"></div>
    `;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();

    const alert = `
    <div class="${className}">${message}</div>
    `;
    this.profile.insertAdjacentHTML('afterbegin', alert);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    console.log(currentAlert);
    if (currentAlert) currentAlert.remove();
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
