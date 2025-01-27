import BlogPostContainer from "./components/BlogPostContainer"
import CategoryList from "./components/CategoryList"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import NewLetter from "./components/NewLetter"

function App() {
  
  return (
    <>
      <NavBar />
      <NewLetter />
      <CategoryList />
      <div className="grid lg:grid-cols-2 w-[85%] mx-auto gap-6 my-20">
      <BlogPostContainer />
      <BlogPostContainer />
      <BlogPostContainer />
      <BlogPostContainer />
      <BlogPostContainer />
      <BlogPostContainer />
      </div>
      <Footer />
    </>
  )
}

export default App
