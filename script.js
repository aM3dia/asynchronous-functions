/*simulate data fetching using promises
function fetchUserProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 1) { //90% chance of success, 10% chance of potential failure/error
                resolve({id: 1, name: 'Samantha Smith'});
            } else {
                reject('Could not fetch user profile');
            }
        }, 1000); //1 second = 1000 milliseconds delay
    });
}

function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve([
                    {id: 1, post: 'New season of Emily in Paris!'},
                    {id: 2, post: 'Hot Wheel`s latest TH car'},
                    {id: 3, post: 'Favorite F.R.I.E.N.D.S line'}
                ]);
            } else {
                reject('Failed to fetch posts');
            }
        }, 2000);
    });
}

function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve([
                    {id: 1, content: 'Can`t wait!'},
                    {id: 2, content: 'I want one!'},
                    {id: 3, content: 'How you doing? -Joey'}
                ]);
            } else {
                reject('Failed to fetch comments');
            }
        }, 1500);
    });
}*/

/*implement sequential data fetching
async function fetchSequential() {
    try {
        console.log('Fetching user profile...');
        const user = await fetchUserProfile();
        console.log('User profile retreived:', user);

        console.log('Fetching posts...');
        const posts = await fetchPosts();
        console.log('Posts retrieved:', posts);

        console.log('Fetching comments...');
        const comments = await fetchComments();
        console.log('Comments retrieved:', comments);
    } catch (error) { //triggered if function is rejected
        console.log('Error encountered during sequential fetch:', error);
    }
}
console.log(fetchSequential());*/

/*implement parallel data fetching
async function fetchParallel() {
    try {
        console.log('Fetching user, posts, and comments...');
        const [user, posts, comments] = await Promise.all([
            fetchUserProfile(),
            fetchPosts(),
            fetchComments()
        ]);
        console.log('User profile:', user);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    } catch (error) { //triggered if function is rejected
        console.log('Error encountered during parallel fetch...', error);
    }
}
console.log(fetchParallel());*/

//refractor with async/await
async function fetchUserProfile() {
    try {
        const userProfile = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.9) {
                    resolve({id: 1, name: 'Samantha Smith'});
                } else {
                    reject('Could not fetch user profile');
                }
            }, 1000);
        });
        return userProfile;
    } catch (error) {
        throw new Error(`Error fetching user profile: ${error}`);
    }
}

async function fetchPosts() {
    try {
        const posts = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.9) {
                    resolve([
                        {id: 1, post: 'New season of Emily in Paris!'},
                        {id: 2, post: 'Hot Wheel`s latest TH car'},
                        {id: 3, post: 'Favorite F.R.I.E.N.D.S line'}
                    ]);
                } else {
                    reject('Failed to fetch posts');
                }
            }, 2000);
        });
        return posts;
    } catch (error) {
        throw new Error(`Error fetching posts: ${error}`);
    }
}

async function fetchComments() {
    try {
        const comments = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.9) {
                    resolve([
                        {id: 1, comment: 'Can`t wait!'},
                        {id: 2, comment: 'I want one!'},
                        {id: 3, comment: 'How you doing? -Joey'}
                    ]);
                } else {
                    reject('Failed to fetch comments');
                }
            }, 1500);
        });
        return comments;
    } catch (error) {
        throw new Error(`Error fetching comments: ${error}`);
    }
}

getUserContent();

//chaining async functions
async function getUserContent() {
    try {
        console.log('Retrieving user content...');
        //retrieve user profile
        const user = await fetchUserProfile();
        console.log('User profile retrieved:', user);
        //retrieve posts
        const posts = await fetchPosts();
        console.log('Posts retrieved:', posts);
        //retrieve comments
        const comments = await fetchComments();
        console.log('Comments retrieved:', comments);
        //combine the results
        console.log('Data retrieved successfully!');
        return {user, posts, comments};
    } catch (error) {
        console.error('Failed to retrieve user content:', error)
    }
}