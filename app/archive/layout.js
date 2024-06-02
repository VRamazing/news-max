import React from 'react';

const ArchiveLayout = ({archive, latest}) => {
    return (
        <div>
           <h1>News archive</h1>
           <section id="archive-filter">
                {archive}
           </section>
           <section id="archive-filter">
                {latest}
           </section>
        </div>
    );
}

export default ArchiveLayout;
