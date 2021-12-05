import classes from "./StoryOverlay.module.scss";
import storyLogo from "../../../Image/storyLogo.png";
import StoryDetail from "./StoryDetail";
import CloseBtn from "../Svg/CloseBtn";
import useHandleNextPrev from "../../../custom-hooks/useHandleNextPrev";

const StoryOverlay = ({ index, story, onClose}) => {
  const {handlePrevItem, handleNextItem, displayedItem, counter} = useHandleNextPrev(index, story)

  return (
    <div className={classes.storyOverlay}>
      <img className={classes.logo} src={storyLogo} />
      <StoryDetail
        displayedStory={displayedItem}
        onNext={handleNextItem}
        onPrev={handlePrevItem}
        index={counter} 
        total={story.length -1}
      />
      <CloseBtn onClick={onClose}/>
    </div>
  );
};

export default StoryOverlay;
