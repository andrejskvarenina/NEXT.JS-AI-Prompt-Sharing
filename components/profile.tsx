import PromptCard from "./prompt-card";
import { PostType } from "@types";

type Props = {
  name: string;
  desc: string;
  data: PostType[];
  handleEdit: (post: PostType) => void;
  handleDelete: (post: PostType) => Promise<void>;
};

const   Profile = ({name, desc, data, handleEdit, handleDelete }: Props) => {

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text_left">{desc}</p>

      <div className="mt-10 prompt_layout">
      {data.map((post : PostType ) => {
        
        return (
          <PromptCard 
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)} 
          />
        )
      })}
    </div>

    </section>
  )
}

export default Profile
