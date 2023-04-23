import Post from "./Post.js";
import PostService from "./PostService.js";


class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            res.status(200).json({
                message: 'Все прошло ОК',
                post: post
            });;
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
           const posts = await PostService.getAll()
           return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const post = await PostService.getOne(id);
            return res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.status(200).json(updatedPost);  
        } catch (e) {
            res.status(500).json(e.name)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            res.status(200).json(post);     
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new PostController();


// import Post from "./Post.js";



// class PostController {
//     async create(req, res) {
//         try {
//             const { author, title, content, picture } = req.body
//             const post = await Post.create({ author, title, content, picture })
//             res.status(200).json({
//                 message: 'Все прошло ОК',
//                 post: post
//             });;
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     }

//     async getAll(req, res) {
//         try {
//            const posts = await Post.find()
//            return res.json(posts);
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     }

//     async getOne(req, res) {
//         try {
//             const { id } = req.params;
//             if (!id) {
//                 return res.status(400).json({ message: "Id not found" }); // добавляем return перед вызовом метода response, чтобы прервать выполнение кода, если id не найден
//             }
//             const post = await Post.findById(id);
//             if (!post) {
//                 return res.status(404).json({ message: "Post not found" }); // возвращаем ошибку 404, если пост с указанным id не найден
//             }
//             return res.status(200).json(post); // возвращаем найденный пост
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     }

//     async update(req, res) {
//         try {
//             const post= req.body
//             if (!post._id) {
//                 res.status(400).json({message: "Id not found"})
//                 }
//                 const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
//                 return res.status(200).json(updatedPost);  
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     }

//     async delete(req, res) {
//         try {
//             const {id} = req.params
//             if (!id) {
//                 res.status(400).json({message: "Id not found"})
//                 }
//             const post = await Post.findByIdAndDelete(id)
//             res.status(200).json(post);     
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     }

// }

// export default new PostController();


