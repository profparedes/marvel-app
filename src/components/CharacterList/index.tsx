import { memo, useState } from 'react';

import { Button } from 'react-bootstrap';

import { CharacterAppearanceType } from 'types/CharacterType';

interface ICharacterCardProps {
  item: CharacterAppearanceType;
  title: string;
}

const CharacterList: React.FC<ICharacterCardProps> = ({ item, title }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="d-flex align-items-center gap-3 mt-3 mb-2">
        <p className="h5 text-light mb-0">
          {title} avaliable: {item.available}
        </p>
        <Button
          data-testid="character-list-show-hide-button"
          style={{ borderRadius: '20px' }}
          variant="outline-success"
          size="sm"
          onClick={() => setShowAll((prevShowAll) => !prevShowAll)}
        >
          {showAll ? `Hide ${title}` : `Show ${title}`}
        </Button>
      </div>
      {item.items.slice(0, showAll ? undefined : 0).map((i) => (
        <div key={i.name} className="d-flex gap-2">
          <p className="text-light">{i.name}</p>
          {i.type && <p className="text-light">{i.type}</p>}
        </div>
      ))}
    </>
  );
};

export default memo(CharacterList);
