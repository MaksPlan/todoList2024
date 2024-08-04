import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = { id: string | null; children: React.ReactNode; };
type containerOptions = { id: string; mountNode?: HTMLElement };

const createContainer = (options : containerOptions) => {
  if (document.getElementById(options.id)) {
    return;
  }

  const { id, mountNode = document.body } = options;
  
  const portalContainer = document.createElement('div');

  portalContainer.setAttribute('id', id);
  mountNode.appendChild(portalContainer);
};


const PortalWrapper = (props: PortalProps) => {
    const {id, children} = props;
    const [container, setContainer] = useState<HTMLElement>();

    useEffect(() => {
        if (id) {
          const portalContainer = document.getElementById(id);
    
          if (!portalContainer) {
            throw new Error('There is no portal container in markup');
          }
    
          setContainer(portalContainer);
        }
      }, [id]);

   
  return container ? createPortal(children, container) : null;
};

export {createContainer}
export default PortalWrapper;