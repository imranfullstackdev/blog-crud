Packages used:
bootstrap,
react,
react-bootstrap,
react-icon,
react-icons,
react-router-dom,

for Running The project
Please go inside the Eqmablog and then run the command
npm run start



navbar:
This Page Consist of Navabar fr our ui
Navbar is present in NavbarEqma file
it consist of 2 component
1 logo
and a icon for redirecting to Home page(ViewBlog)
i used react-icon for icons
User can click on  either logo or icon for redirection
i used useNavigation of react-router-dom 

Custom css:
i used react-bootstrap,inline and external css
all the css and its used are mention along with its uses in the App.css

AllBLog:
In view blog all the blogs are shown in cart format in  reverse chronological order 


user can able to see all the blogs in the page in cart format
user  can click on any cart and that information is sent to View blog page
I user uselocation of react-router dom to send data from one page to another(i.e)
navbar is paced above so that user can come to home page
I used react-icons for home icon
I used company logo as blog logo
user can click on both logo as well as home icon to redirect to home page(i.e:AllBlogs page)

viewBlog:
view Blog consisit on a particular blog which a user has clicked
I had used useLocation to get data from ViewBlog page


Instruction to user:
onclicking of the particular blog user can read the blog in viewBlog page 
Note:User Can only read the data can'be edit the data 
after reading the data user can come to home screen by clicking on Home icon or logo

AddBlog:
on the end of the blogs in AllBlogs page user can see the Add icon
I used react-icons for edit icon
onclicking on the icon the user will be redirected to Addblock page

Instruction to user for Addblog page:
the user have to fill all the data like blogtitle and blog content 
after filling the data of blogs user have to click the button of Addblog
on clicking the data the alert button will be shown with blog's title
now this blog data will be shown in AllBlog
user have to click icon or logo for navigating to viewBlog page

Deleting the blog
althought it was't mentioned in the description
There is a button in every Blog cart with delete icon
onClicking of the delete button the Block will be deleted and page will be refereshed
for editing i had made api and checked in post man it is working fine
I haven't implemented here because i think there is no edit button in blogs







