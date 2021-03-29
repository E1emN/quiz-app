cd components
mkdir $1
cd $1
touch $2.tsx $2.scss

cat >> $2.tsx <<EOL
import React from 'react';
import './$2.scss';

export const $1: React.FC = () => {
    return(
        <div className="$2">
            <div className="$2__container">
            </div>
        </div>
    )
};
EOL

cat >> $2.scss <<EOL
@import '../../assests/styles/mixins.scss';
@import '../../assests/styles/vaiables.scss';
EOL

echo "done"