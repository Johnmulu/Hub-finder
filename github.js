class Github {
    constructor() {
        this.client_id = '5fd8d3fba8603454807c'
        this.client_secret = '22a7dc4d2bc7582d1f673d4dcbf3445e5d2ff5e6'
        this.repos_count = 3;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id =${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile: profile,
            repos: repos  
        }
    }
}