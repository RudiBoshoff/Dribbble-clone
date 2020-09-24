# DRIBBBLE CLONE
A clone of dribbble using rails. Site has authentication, authorization and user roles to allow for CRUD of own posts but not other users. The app makes use of BULMA CSS for styling and DEVISE gem for user roles and authentication. The site has likes rendered with AJAX and view counts and allows for drag and drop image uploads.

### Functionality:

1. CRUD of posts known as shots
2. Signin/up, logout, account creation, password resets, error handling, flash messages
3. user roles, can only edit own posts
4. can only post once signed in
5. UI changes based on signedin/out
6. Ability to like shots if signed in
7. Counts shot views and orders the index page based on popularity
8. CRD of comments on shots
9. gravatar profile images

### TODO:
1. implement testing (RSPEC or minitests)

### GEMS:
1. Devise
2. Bulma
3. Gravatar
4. Better-errors
5. Guard
6. Guard-livereload
7. jquery
8. acts_as_votable
9. carrier_wave
10. mini_magick

### Screen Shots of index page Desktop to Mobile:
<p align="center">
  <img src="https://user-images.githubusercontent.com/30492583/94128089-ff7abe00-fe59-11ea-8a48-f99aee3ccab2.png">
  <img src="https://user-images.githubusercontent.com/30492583/94128112-043f7200-fe5a-11ea-9de5-02fd048b4195.png">
  <img src="https://user-images.githubusercontent.com/30492583/94128130-09042600-fe5a-11ea-8575-d34917c1aa48.png">
  <img src="https://user-images.githubusercontent.com/30492583/94128148-0efa0700-fe5a-11ea-9e78-8395bdecd9e0.png">
</p>

