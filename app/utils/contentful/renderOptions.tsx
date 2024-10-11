/* eslint-disable @typescript-eslint/no-explicit-any */
import { BLOCKS } from '@contentful/rich-text-types'
import { H1, H2, H3, P } from '../../components/fontComponents/fonts'


export const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node: any, children: any) => <H3>{children}</H3>,
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <P>{children}</P>
  }
}
