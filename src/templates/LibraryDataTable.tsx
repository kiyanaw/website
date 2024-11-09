import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import { format } from 'date-fns';
import { NextSeo } from 'next-seo';

import { categories, contents, levels, types } from '@/data/library-constants';
import { useQueryState } from '@/lib/useQueryState';

import data from '../data/library-data.json';
import { LibraryContentLanguage } from './LibraryContentLanguage';
import { LibraryIcon } from './LibraryIcon';
import { Tag } from './Tags';

const LibraryDataTable = () => {
  const [search, setSearch] = useQueryState('search');
  const [type, setType] = useQueryState('type');
  const [category, setCategory] = useQueryState('category');
  const [level, setLevel] = useQueryState('level');
  const [content, setContent] = useQueryState('content');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearchChange = (event: any) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleTypeChange = (event: any) => {
    const { value } = event.target;
    setType(value);
  };

  const handleCategoryChange = (event: any) => {
    const { value } = event.target;
    setCategory(value);
  };

  const handleLevelChange = (event: any) => {
    const { value } = event.target;
    setLevel(value);
  };

  const handleContentChange = (event: any) => {
    const { value } = event.target;
    setContent(value);
  };

  const filteredData: any = data.filter((item) => {
    const searchValue = search || '';
    const typeValue = type || '';
    const categoryValue = category || '';
    const levelValue = level || '';
    const contentValue = content || '';
    return (
      (item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.author.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())) &&
      (typeValue ? item.type === typeValue : true) &&
      (categoryValue ? item.category === categoryValue : true) &&
      (levelValue ? item.level === levelValue : true) &&
      (contentValue ? item.content.includes(contentValue) : true)
    );
  });

  const renderDescription = (item: any) => {
    let youtube = false;
    if (item.source.includes('www.youtube.com')) {
      youtube = true;
    }
    let facebook = false;
    if (item.source.includes('facebook.com')) {
      facebook = true;
    }
    let paid = false;
    if (item.tags.includes('paid')) {
      paid = true;
    }
    let pdf = false;
    if (item.type === 'doc') {
      pdf = true;
    }

    return (
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            <a href={item.source} target="_blank">
              <span className="font-bold">{item.title}</span> | {item.author}
            </a>
          </p>
          <p className="text-sm text-default-500">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {youtube && <Tag color="red" text="YOUTUBE" />}
            {facebook && <Tag color="sky" text="FACEBOOK" />}
            {paid && <Tag color="green" text="$" />}
            {pdf && <Tag color="pink" text="PDF" />}

            <Tag color="default" text={item.category} />
            <Tag color="warning" text={item.level} />
            <LibraryContentLanguage language={item.content} />
            <Tag
              color="secondary"
              text={`Added ${format(new Date(item.created), 'MMM d, yyyy')}`}
            />
          </div>
        </div>
      </div>
    );
  };

  let inCategory = 'All Resources';
  if (category) {
    inCategory = ` ${category}`;
  }

  let inDetails = '';
  if (type || level || content) {
    const all = [type, level, content].filter((item) => item);
    inDetails = ` (${all.join(', ')})`;
  }
  let inSearch = '';
  if (search) {
    inSearch = `"${search}" in ${inCategory}${inDetails}`;
  } else {
    inSearch = `${inCategory}${inDetails}`;
  }

  const meta = {
    title: 'kiyânaw Learner Library',
    description: 'Resources for language learners',
    site_name: 'kiyânaw - all of us',
  };

  // Helper function to create selectedKeys array
  const getSelectedKeys = (value: string | null) => {
    return value ? [value] : [];
  };

  const renderFilters = () => (
    <>
      <Select
        label="Resource type"
        size="sm"
        color={type ? 'secondary' : 'default'}
        className="mb-4 w-full"
        selectedKeys={getSelectedKeys(type)}
        onChange={handleTypeChange}
      >
        {types.map((type) => (
          <SelectItem key={type.value} value={type.value}>
            {type.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Category"
        size="sm"
        color={category ? 'secondary' : 'default'}
        className="mb-4 w-full"
        selectedKeys={getSelectedKeys(category)}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Level"
        size="sm"
        color={level ? 'secondary' : 'default'}
        className="mb-4 w-full"
        selectedKeys={getSelectedKeys(level)}
        onChange={handleLevelChange}
      >
        {levels.map((level) => (
          <SelectItem key={level.value} value={level.value}>
            {level.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Content Language"
        size="sm"
        color={content ? 'secondary' : 'default'}
        className="mb-4 w-full"
        selectedKeys={getSelectedKeys(content)}
        onChange={handleContentChange}
      >
        {contents.map((content) => (
          <SelectItem key={content.value} value={content.value}>
            {content.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );

  // Get count of active filters including search
  const activeFilterCount = [type, category, level, content].filter(
    Boolean,
  ).length;
  const hasActiveFilters = activeFilterCount > 0 || search;

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: inSearch,
        }}
      />
      <div className="mx-auto w-full px-3 text-slate-700">
        <div className="m-auto w-10/12 space-y-2 py-3">
          <div className="flex gap-2">
            <Input
              placeholder="Search..."
              color={search ? 'secondary' : 'default'}
              size="lg"
              value={search || ''}
              onChange={handleSearchChange}
              className="grow"
            />
            <Button
              onPress={onOpen}
              color={activeFilterCount > 0 ? 'secondary' : 'default'}
              variant={activeFilterCount > 0 ? 'solid' : 'light'}
              className="min-w-[120px]"
            >
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </Button>
          </div>

          {hasActiveFilters && (
            <div className="flex">
              <Button
                as={Link}
                href="/library"
                size="sm"
                variant="flat"
                color="danger"
                className="font-medium"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Filters modal - now used for both mobile and desktop */}
        <Modal isOpen={isOpen} onClose={onClose} placement="center" size="lg">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Filters
                </ModalHeader>
                <ModalBody>{renderFilters()}</ModalBody>
                <ModalFooter>
                  {hasActiveFilters && (
                    <Button
                      as={Link}
                      href="/library"
                      size="sm"
                      variant="flat"
                      color="danger"
                      className="mr-3 font-medium"
                    >
                      Clear all filters
                    </Button>
                  )}
                  <Button color="primary" onPress={onClose}>
                    Done
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <Table
          aria-label="Language resources"
          classNames={{
            td: 'py-4',
            tr: 'border-b border-default-200',
          }}
        >
          <TableHeader>
            <TableColumn>Type</TableColumn>
            <TableColumn>Title</TableColumn>
          </TableHeader>
          <TableBody>
            {filteredData.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <LibraryIcon type={item.type} />
                </TableCell>
                <TableCell>{renderDescription(item)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export { LibraryDataTable };
